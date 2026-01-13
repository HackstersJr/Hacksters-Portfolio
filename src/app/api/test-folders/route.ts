import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

interface CloudinaryResource {
  public_id: string;
  folder?: string;
}

interface CloudinaryFolder {
  path: string;
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function GET() {
  try {
    console.log('🔍 Testing different folder paths...');

    // Test 1: Get ALL images from entire account
    console.log('\n=== Test 1: Get ALL images (no folder filter) ===');
    try {
      const allImages = await cloudinary.api.resources({
        type: 'upload',
        max_results: 100,
        resource_type: 'image',
      });
      console.log('Total images in account:', allImages.resources?.length || 0);
      if (allImages.resources && allImages.resources.length > 0) {
        console.log('Sample images:');
        allImages.resources.slice(0, 5).forEach((img: CloudinaryResource) => {
          console.log(`  - ${img.public_id} (folder: ${img.folder || 'root'})`);
        });
      }
    } catch (e) {
      console.log('Error getting all images:', e instanceof Error ? e.message : e);
    }

    // Test 2: Try searching by tag
    console.log('\n=== Test 2: List all tags ===');
    try {
      const tags = await cloudinary.api.tags({ max_results: 50 });
      console.log('Tags found:', tags.tags || []);
    } catch (e) {
      console.log('Tags error:', e instanceof Error ? e.message : e);
    }

    // Test 3: Root folders
    console.log('\n=== Test 3: List root folders ===');
    const rootFolders = await cloudinary.api.root_folders();
    console.log('Root folders:', rootFolders.folders?.map((f: CloudinaryFolder) => f.path) || []);

    // Test 4: Check specific public_id from your URL
    console.log('\n=== Test 4: Check specific image ===');
    try {
      const specificImage = await cloudinary.api.resource('939b0ca3-aef6-4500-bab9-38e8e76490b8_xgqipb');
      console.log('Found image:', {
        public_id: specificImage.public_id,
        folder: specificImage.folder || 'root',
        format: specificImage.format,
        width: specificImage.width,
        height: specificImage.height,
      });
    } catch (e) {
      console.log('Specific image error:', e instanceof Error ? e.message : e);
    }

    return NextResponse.json({
      success: true,
      message: 'Check terminal logs for detailed results',
    });
  } catch (error) {
    console.error('Test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
