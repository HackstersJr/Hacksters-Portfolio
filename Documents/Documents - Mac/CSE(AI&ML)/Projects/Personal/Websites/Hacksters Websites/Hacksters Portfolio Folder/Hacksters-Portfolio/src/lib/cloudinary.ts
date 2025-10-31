import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary - moved to individual functions to ensure env vars are loaded
function configureCloudinary() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    throw new Error('Missing Cloudinary environment variables');
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
}

export interface CloudinaryImage {
  publicId: string;
  url: string;
  secureUrl: string;
  width: number;
  height: number;
  format: string;
  folder: string;
  category: 'BTS' | 'Official';
}

/**
 * Fetch all images from a specific folder (recursively including all subfolders!)
 */
async function fetchImagesFromFolder(folderPath: string): Promise<CloudinaryImage[]> {
  try {
    // Configure Cloudinary before using it
    configureCloudinary();

    // First, get all subfolders
    let allImages: CloudinaryImage[] = [];
    
    try {
      const subfolders = await cloudinary.api.sub_folders(folderPath);
      
      // Fetch images from each subfolder
      if (subfolders.folders && subfolders.folders.length > 0) {
        for (const subfolder of subfolders.folders) {
          const result = await cloudinary.api.resources({
            type: 'upload',
            prefix: subfolder.path,
            max_results: 500,
            resource_type: 'image',
          });
          
          if (result.resources && result.resources.length > 0) {
            const images = result.resources.map((resource: any) => {
              const optimizedUrl = getOptimizedImageUrl(resource.public_id, {
                width: 600,
                height: 450,
                quality: 'auto:eco',
                format: 'auto',
              });

              return {
                publicId: resource.public_id,
                url: optimizedUrl,
                secureUrl: optimizedUrl,
                width: resource.width,
                height: resource.height,
                format: resource.format,
                folder: subfolder.path,
                category: folderPath.includes('BTS') ? 'BTS' : 'Official',
              };
            });
            
            allImages = allImages.concat(images);
          }
        }
      }
    } catch (subfolderError) {
      // No subfolders, try direct images
    }
    
    // Also try to get images directly in the folder (not in subfolders)
    try {
      const directResult = await cloudinary.api.resources({
        type: 'upload',
        prefix: folderPath,
        max_results: 500,
        resource_type: 'image',
      });
      
      if (directResult.resources && directResult.resources.length > 0) {
        const directImages = directResult.resources.map((resource: any) => {
          const optimizedUrl = getOptimizedImageUrl(resource.public_id, {
            width: 600,
            height: 450,
            quality: 'auto:eco',
            format: 'auto',
          });

          return {
            publicId: resource.public_id,
            url: optimizedUrl,
            secureUrl: optimizedUrl,
            width: resource.width,
            height: resource.height,
            format: resource.format,
            folder: resource.folder || folderPath,
            category: folderPath.includes('BTS') ? 'BTS' : 'Official',
          };
        });
        
        allImages = allImages.concat(directImages);
      }
    } catch (directError) {
      // No direct images
    }
    
    return allImages;
    
  } catch (error) {
    console.error(`Error fetching images from ${folderPath}:`, error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

/**
 * Get all BTS images from all subfolders
 * Since images are actually at root level, fetch all and organize them later
 */
export async function getBTSImages(): Promise<CloudinaryImage[]> {
  // For now, fetch all images from root
  // TODO: When images are properly organized in folders, uncomment this:
  // return fetchImagesFromFolder('BTS');
  
  return fetchAllImagesFromRoot('BTS');
}

/**
 * Get all Official(win) images from all subfolders
 */
export async function getOfficialImages(): Promise<CloudinaryImage[]> {
  // For now, fetch all images from root
  // TODO: When images are properly organized in folders, uncomment this:
  // return fetchImagesFromFolder('Official(Win)');
  
  return fetchAllImagesFromRoot('Official');
}

/**
 * Temporary function to fetch all images from root level
 * Remove this when images are properly organized in folders
 */
async function fetchAllImagesFromRoot(category: 'BTS' | 'Official'): Promise<CloudinaryImage[]> {
  try {
    // Configure Cloudinary before using it
    configureCloudinary();

    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 500,
      resource_type: 'image',
    });
    
    if (!result.resources || result.resources.length === 0) {
      return [];
    }

    // Map all images with optimized URLs
    return result.resources.map((resource: any) => {
      const optimizedUrl = getOptimizedImageUrl(resource.public_id, {
        width: 600,
        height: 450,
        quality: 'auto:eco',
        format: 'auto',
      });

      return {
        publicId: resource.public_id,
        url: optimizedUrl,
        secureUrl: optimizedUrl,
        width: resource.width,
        height: resource.height,
        format: resource.format,
        folder: resource.folder || 'root',
        category: category,
      };
    });
  } catch (error) {
    console.error('Error fetching images:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

/**
 * Get ALL images from both BTS and Official folders
 */
export async function getAllImages(): Promise<{
  all: CloudinaryImage[];
  bts: CloudinaryImage[];
  official: CloudinaryImage[];
}> {
  const [bts, official] = await Promise.all([
    getBTSImages(),
    getOfficialImages(),
  ]);

  return {
    all: [...bts, ...official],
    bts,
    official,
  };
}

/**
 * Shuffle array randomly (for dome gallery randomization)
 */
export function shuffleImages<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generate optimized Cloudinary URL with transformations
 * Optimized for MINIMAL credits while maintaining quality:
 * - Auto quality & format (smallest file size)
 * - Progressive JPEG loading
 * - Automatic format conversion (WebP/AVIF when supported)
 * - Lazy loading friendly
 */
export function getOptimizedImageUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string | number;
    format?: string;
  } = {}
): string {
  // Configure Cloudinary before using it
  configureCloudinary();

  const {
    width = 600,  // Smaller default for dome gallery
    height = 450,
    quality = 'auto:eco',  // Auto quality with eco mode (saves credits!)
    format = 'auto',
  } = options;

  return cloudinary.url(publicId, {
    transformation: [
      { 
        width, 
        height, 
        crop: 'fill',
        gravity: 'auto',
        fetch_format: format,
        quality: quality,
        flags: 'progressive',  // Progressive loading
      },
    ],
    secure: true,
  });
}

export default cloudinary;
