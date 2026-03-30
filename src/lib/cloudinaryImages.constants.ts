/**
 * Cloudinary Image URLs - Event-Based Structure
 * 
 * Organized by EVENT → BTS/Win to match Cloudinary folder structure
 * Makes it super easy to add new events!
 * 
 * Usage in components:
 * import { EVENTS } from '@/lib/cloudinaryImages.constants';
 * 
 * To add a new event, just copy-paste this template:
 * 
 * '14. Your Event Name': {
 *   bts: [
 *     'https://res.cloudinary.com/...',
 *   ],
 *   win: [
 *     'https://res.cloudinary.com/...',
 *   ],
 * },
 */

export interface EventImages {
  bts: string[];
  win: string[];
}

export interface EventsConfig {
  [eventName: string]: EventImages;
}

// All events with their BTS and Win images
export const EVENTS: EventsConfig = {
  '1. IEEE': {
    bts: [],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761674222/WhatsApp_Image_2025-10-28_at_23.25.08_1_azrpm0.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761674232/WhatsApp_Image_2025-10-28_at_23.25.06_nplrdc.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761674243/WhatsApp_Image_2025-10-28_at_23.25.08_ngabub.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761674254/WhatsApp_Image_2025-10-28_at_23.25.07_tgdwth.jpg',
    ],
  },

  '2. Dizzy Hackers': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201398/IMG-20250228-WA0029_fqcq19.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201397/IMG-20250228-WA0017_kxjuis.jpg',
    
    ],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199129/IMG-20250228-WA0026_iyugyr.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199129/IMG-20250228-WA0020_xhs0n8.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199128/IMG-20250228-WA0035_zzbbsi.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199127/IMG-20250228-WA0017_zjla8t.jpg',
    ],
  },

  '3. SheLeads': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201335/IMG-20250307-WA0041_qm0zos.jpg',
    ],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199437/IMG-20250307-WA0050_pxsaaa.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199436/IMG-20250307-WA0033_rkrvua.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199437/IMG-20250307-WA0030_kaysdh.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199435/20250307_160256_0_rv4zs1.heic',
    ],
  },

  '3. SheLeads 2.0': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1774861434/4I6A7959_p4puaa.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1774861432/4I6A7478_dht6ri.jpg',
    ],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1774861418/4I6A8332_u5owor.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1774861417/0A2A8034_y87lln.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1774861416/4I6A8441_dpgtjj.jpg',
    ],
  },

  '4. Innovatex': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201574/20250416_195451_arkgt3.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201572/20250416_203859_z8vzzr.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201571/20250416_205407_q0ewhb.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201568/20250416_204127_kwuxja.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201567/20250416_205057_kvj6ul.heic',
    ],
    win: [],
  },

  '5. Hackfest NMAM': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200869/PHOTO-2025-10-02-12-36-14_wlnqip.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200867/PHOTO-2025-10-02-12-37-42_ve3rsj.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200866/PHOTO-2025-10-02-12-36-06_ra5pv9.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200864/PHOTO-2025-10-02-12-39-41_ygbelt.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200863/PHOTO-2025-10-02-12-46-50_vgonjl.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200861/PHOTO-2025-10-02-12-37-20_xvno80.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200860/PHOTO-2025-10-02-12-37-18_e428sh.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200858/PHOTO-2025-10-02-12-37-16_jllxay.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200857/PHOTO-2025-10-02-12-36-09_v6drr6.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200855/PHOTO-2025-10-02-12-36-08_gapmsd.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200853/PHOTO-2025-10-02-12-37-31_2_ckpyys.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200853/PHOTO-2025-10-02-12-40-16_bmfeyv.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200852/PHOTO-2025-10-02-12-40-02_dzvaqy.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200851/PHOTO-2025-10-02-12-40-10_p0kayd.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761990888/PHOTO-2025-10-02-12-46-25_ceff4p.jpg',
    ],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761991006/PHOTO-2025-10-02-12-34-25_uquasl.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761991007/PHOTO-2025-10-02-12-36-23_djcgk1.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761991004/PHOTO-2025-10-02-12-34-15_ugqcq5.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761991009/PHOTO-2025-10-02-12-40-03_wi554f.jpg',
    ],
  },

  '6. Nexovate': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200875/WhatsApp_Image_2025-09-29_at_08.02.39_1_i3hodq.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200874/WhatsApp_Image_2025-09-29_at_08.02.37_og2gtc.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200872/WhatsApp_Image_2025-09-29_at_08.02.40_pcbe0g.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200871/WhatsApp_Image_2025-09-29_at_08.02.38_yectm8.jpg',
    ],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200976/WhatsApp_Image_2025-09-29_at_08.02.33_tqnosd.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200979/WhatsApp_Image_2025-09-29_at_08.02.38_2_l6m8pe.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200977/WhatsApp_Image_2025-09-29_at_08.02.43_ju8did.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200977/WhatsApp_Image_2025-09-29_at_08.02.39_g26xpi.jpg',
    ],
  },

  '7. Eureka': {
    bts: [],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768581251/PHOTO-2026-01-15-19-10-13_vgfwx8.jpg',
    ],
  },

  '8. Iotopia': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667697/IMG_6734_c8zsf3.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667696/IMG_6728_ojlrco.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667694/IMG_6710_dvb3iv.jpg',
    ],
    win: [],
  },

  '9. Srujana Chanakya': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667988/IMG_6796_g6qufj.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667985/IMG20250915153457_qyvdo5.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667985/IMG20250914175434_gdiy5h.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667983/IMG20250914175224_wbykbt.jpg',
    ],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668004/IMG20250915160417_01_izbhlf.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668007/IMG20250915171742_aoai1m.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668000/IMG20250915165018_otfht1.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667998/IMG20250915171929_j7zjtp.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668003/IMG20250915171418_rlfilw.jpg',
    ],
  },

  '10. Nasa Space Apps': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768149031/D2A9388A-5E97-4471-98B6-FE42D2708EF3_cxymyv.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768149030/20251004_84257PMByGPSMapCamera_ccvnfg.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768149027/2CF32C43-3699-42B7-85F1-643B22CBCB61_nzpl4n.jpg',
    ],
    win: [],
  },

  '11. Pravruthi Ramiah': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768150175/PHOTO-2026-01-11-22-18-38_avaglr.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768149775/IMG20251015083428_01_lwtyo7.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768149774/615514D1-BEEB-41F6-A1BF-5E81EB97308E_lwbfb0.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768149771/IMG20251015190739_bn1ggo.jpg',
    ],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768150174/PHOTO-2026-01-11-22-18-39_yh29vx.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768149777/5B07B7FA-C3C1-4130-BE02-22025FC12237_xuif7t.jpg',
    ],
  },

  '12. Hackorbital IIST-Trivandrum': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668730/IMG20251018145630_ogxodl.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668730/IMG20251019125757_01_tukg4x.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668729/IMG20251017155000_hltucs.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668727/IMG20251017074602_kiries.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668722/IMG_8512_k9cije.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668720/939b0ca3-aef6-4500-bab9-38e8e76490b8_xgqipb.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668718/IMG_8531_orzw2a.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668717/_DSC7435_-_01_mhidw4.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668717/_DSC7399_-_01_cx8nqx.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668717/_DSC7835_-_01_ujhjtu.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668714/_DSC7493_-_01_wsmckq.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668714/_DSC7792_-_01_x7u24h.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668714/_DSC7503_-_01_tu5ltx.jpg',
    ],
    win: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668034/IMG_8416_kjl4st.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668032/17-10-202506_31_26PM_49_ByGPSMapCamera_xbpm4l.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668020/IMG_8444_esa682.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668024/IMG_8449_opn4wk.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668027/IMG_8451_csnutw.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668030/IMG_8366_s76vkr.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668038/IMG_8426_agb04o.jpg',
    ],
  },

  '13. MAD Expo': {
    bts: [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768150418/f37fd0c5-dfef-4357-a3e1-792b623d5a91_vn6luc.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768150417/IMG_9582_y9tt0u.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1768150413/PHOTO-2026-01-11-22-22-28_big6el.jpg',
    ],
    win: [],
  },
};

/**
 * Optimize Cloudinary image URL with transformations
 * Reduces resolution, applies auto format/quality for faster loading and less credits
 * 
 * @param url - Original Cloudinary URL
 * @param options - Optimization options
 * @returns Optimized Cloudinary URL
 */
export interface CloudinaryOptimizeOptions {
  width?: number;
  quality?: 'auto' | 'auto:low' | 'auto:good' | 'auto:best' | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  crop?: 'fill' | 'fit' | 'scale' | 'limit';
}

export function optimizeCloudinaryUrl(
  url: string,
  options: CloudinaryOptimizeOptions = {}
): string {
  // Only process Cloudinary URLs
  if (!url.includes('cloudinary.com')) return url;

  const {
    width = 1920, // Max width 1920px (full HD)
    quality = 'auto:good', // Auto quality optimization
    format = 'auto', // Auto format (WebP when supported)
    crop = 'limit', // Don't upscale, only downscale
  } = options;

  // Build transformation string
  const transformations = [
    `w_${width}`,
    `q_${quality}`,
    `f_${format}`,
    `c_${crop}`,
  ].join(',');

  // Insert transformations into URL
  // Cloudinary URL format: .../upload/...
  return url.replace('/upload/', `/upload/${transformations}/`);
}

/**
 * Get optimized image URL for thumbnails/previews
 */
export function getThumbnailUrl(url: string): string {
  return optimizeCloudinaryUrl(url, {
    width: 800,
    quality: 'auto:good',
    format: 'auto',
  });
}

/**
 * Get optimized image URL for full-screen lightbox
 */
export function getLightboxUrl(url: string): string {
  return optimizeCloudinaryUrl(url, {
    width: 2560, // 2K max
    quality: 'auto:good',
    format: 'auto',
  });
}

/**
 * Get optimized image URL for dome gallery
 */
export function getDomeGalleryUrl(url: string): string {
  return optimizeCloudinaryUrl(url, {
    width: 600,
    quality: 'auto',
    format: 'auto',
  });
}

/**
 * Helper Functions - Updated for Event-Based Structure
 * All functions now apply automatic image optimization!
 */

/**
 * Get all BTS images across all events (OPTIMIZED)
 */
export function getAllBTSImages(): string[] {
  return Object.values(EVENTS).flatMap(event =>
    event.bts.map(url => getThumbnailUrl(url))
  );
}

/**
 * Get all Win images across all events (OPTIMIZED)
 */
export function getAllWinImages(): string[] {
  return Object.values(EVENTS).flatMap(event =>
    event.win.map(url => getThumbnailUrl(url))
  );
}

/**
 * Get all images (both BTS and Win) across all events (OPTIMIZED)
 */
export function getAllImages(): string[] {
  return Object.values(EVENTS).flatMap(event =>
    [...event.bts, ...event.win].map(url => getThumbnailUrl(url))
  );
}

/**
 * Get images for a specific event (RAW - use for custom optimization)
 */
export function getEventImages(eventName: string): EventImages | undefined {
  return EVENTS[eventName];
}

/**
 * Get BTS images for a specific event (OPTIMIZED)
 */
export function getEventBTS(eventName: string): string[] {
  return (EVENTS[eventName]?.bts || []).map(url => getThumbnailUrl(url));
}

/**
 * Get Win images for a specific event (OPTIMIZED)
 */
export function getEventWin(eventName: string): string[] {
  return (EVENTS[eventName]?.win || []).map(url => getThumbnailUrl(url));
}

/**
 * Get random image from all images
 */
export function getRandomImage(): string | null {
  const allImages = getAllImages();
  if (allImages.length === 0) return null;
  return allImages[Math.floor(Math.random() * allImages.length)];
}

/**
 * Get total image count
 */
export function getTotalImageCount(): { bts: number; win: number; total: number } {
  const bts = getAllBTSImages().length;
  const win = getAllWinImages().length;
  return { bts, win, total: bts + win };
}

/**
 * Legacy compatibility - maps old category system to new event system
 * @deprecated Use getAllBTSImages() or getAllWinImages() instead
 */
export function getImagesByCategory(category: 'BTS' | 'Official'): string[] {
  return category === 'BTS' ? getAllBTSImages() : getAllWinImages();
}

export default EVENTS;
