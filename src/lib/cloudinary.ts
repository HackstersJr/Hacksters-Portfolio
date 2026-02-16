import { v2 as cloudinary } from 'cloudinary';

interface CloudinaryApiResource {
  public_id: string;
  width: number;
  height: number;
  format: string;
  folder?: string;
}

function inferCategory(resource: CloudinaryApiResource): 'BTS' | 'Official' {
  const resourcePath = `${resource.folder || ''}/${resource.public_id}`.toLowerCase();
  const officialHints = ['official', 'win', 'winner', 'prize', 'award', 'certificate'];

  const isOfficial = officialHints.some((hint) => resourcePath.includes(hint));
  return isOfficial ? 'Official' : 'BTS';
}

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
 * Get all BTS images from all subfolders
 * Since images are actually at root level, fetch all and organize them later
 */
export async function getBTSImages(): Promise<CloudinaryImage[]> {
  const allImages = await fetchAllImagesFromRoot();
  return allImages.filter((image) => image.category === 'BTS');
}

/**
 * Get all Official(win) images from all subfolders
 */
export async function getOfficialImages(): Promise<CloudinaryImage[]> {
  const allImages = await fetchAllImagesFromRoot();
  return allImages.filter((image) => image.category === 'Official');
}

/**
 * Temporary function to fetch all images from root level
 * Remove this when images are properly organized in folders
 */
async function fetchAllImagesFromRoot(): Promise<CloudinaryImage[]> {
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

    // Team member profile image identifiers to exclude from gallery
    const teamProfilePatterns = [
      'BG-Removed',  // All team member photos have this suffix
      'IMG_7119',    // Vishnu's original photo
    ];

    // Map all images with optimized URLs, excluding team member profile photos
    return result.resources
      .filter((resource: CloudinaryApiResource) => {
        // Exclude team member profile images from the gallery
        return !teamProfilePatterns.some(pattern =>
          resource.public_id.includes(pattern)
        );
      })
      .map((resource: CloudinaryApiResource) => {
        const optimizedUrl = getOptimizedImageUrl(resource.public_id, {
          width: 600,
          height: 450,
          quality: 'auto:eco',
          format: 'auto',
        });

        const category = inferCategory(resource);

        return {
          publicId: resource.public_id,
          url: optimizedUrl,
          secureUrl: optimizedUrl,
          width: resource.width,
          height: resource.height,
          format: resource.format,
          folder: resource.folder || 'root',
          category,
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
  const all = await fetchAllImagesFromRoot();
  const bts = all.filter((image) => image.category === 'BTS');
  const official = all.filter((image) => image.category === 'Official');

  return {
    all,
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
