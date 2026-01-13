import { NextResponse } from 'next/server';
import { getAllImages, shuffleImages } from '@/lib/cloudinary';

export const dynamic = 'force-dynamic'; // Always fetch fresh data
export const revalidate = 3600; // Revalidate every hour

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category'); // 'bts', 'official', or null for all
    const shuffle = searchParams.get('shuffle') === 'true';
    const limit = parseInt(searchParams.get('limit') || '0');

    const { all, bts, official } = await getAllImages();

    let images = all;
    
    // Filter by category if specified
    if (category === 'bts') {
      images = bts;
    } else if (category === 'official') {
      images = official;
    }

    // Shuffle if requested
    if (shuffle) {
      images = shuffleImages(images);
    }

    // Limit results if specified
    if (limit > 0) {
      images = images.slice(0, limit);
    }

    return NextResponse.json({
      success: true,
      count: images.length,
      data: {
        images,
        stats: {
          total: all.length,
          bts: bts.length,
          official: official.length,
        },
      },
    });
  } catch (error) {
    console.error('Cloudinary API Error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch images from Cloudinary',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
