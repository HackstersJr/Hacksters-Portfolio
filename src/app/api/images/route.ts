import { NextResponse } from 'next/server';
import { getAllImages, shuffleImages } from '@/lib/cloudinary';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 60;
const MAX_LIMIT = 200;

const requestCounts = new Map<string, { count: number; resetAt: number }>();

function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ipAddress = forwardedFor?.split(',')[0]?.trim() || realIp || 'unknown';
  return ipAddress;
}

function isRateLimited(clientKey: string): boolean {
  const now = Date.now();
  const current = requestCounts.get(clientKey);

  if (!current || now > current.resetAt) {
    requestCounts.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  requestCounts.set(clientKey, current);

  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function GET(request: Request) {
  try {
    const clientKey = getClientKey(request);
    if (isRateLimited(clientKey)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests',
        },
        { status: 429 }
      );
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const shuffle = searchParams.get('shuffle') === 'true';
    const parsedLimit = Number.parseInt(searchParams.get('limit') || '0', 10);
    const limit = Number.isNaN(parsedLimit)
      ? 0
      : Math.max(0, Math.min(parsedLimit, MAX_LIMIT));

    if (category && category !== 'bts' && category !== 'official') {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid category. Use bts or official.',
        },
        { status: 400 }
      );
    }

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

    return NextResponse.json(
      {
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
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=1800',
        },
      }
    );
  } catch (error) {
    console.error('Cloudinary API Error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch images from Cloudinary',
      },
      { status: 500 }
    );
  }
}
