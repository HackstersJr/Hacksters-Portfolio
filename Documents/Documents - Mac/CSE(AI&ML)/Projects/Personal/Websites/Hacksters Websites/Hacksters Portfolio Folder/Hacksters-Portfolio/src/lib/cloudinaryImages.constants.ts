/**
 * Cloudinary Image URLs - Centralized Storage
 * 
 * This file stores URLs from each Cloudinary folder
 * Add URLs as you provide them, organized by category/folder
 * 
 * Usage in components:
 * import { CLOUDINARY_IMAGES } from '@/lib/cloudinaryImages.constants';
 * 
 * Then use like:
 * - CLOUDINARY_IMAGES.BTS.folder1[0]
 * - CLOUDINARY_IMAGES.Official.folder2
 * - CLOUDINARY_IMAGES.getByCategory('BTS')
 */

export interface ImageFolder {
  [key: string]: string[];
}

export interface CloudinaryImagesConfig {
  BTS: ImageFolder;
  Official: ImageFolder;
  Other?: ImageFolder;
}

// Cloudinary images organized by category and folder
export const CLOUDINARY_IMAGES: CloudinaryImagesConfig = {
  BTS: {
    'Dizzy Hackers': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201398/IMG-20250228-WA0029_fqcq19.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201397/IMG-20250228-WA0017_kxjuis.jpg',
    ],
    'IIST-Trivandrum': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668730/IMG20251018145630_ogxodl.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668730/IMG20251019125757_01_tukg4x.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668729/IMG20251017155000_hltucs.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668727/IMG20251017074602_kiries.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668722/IMG_8512_k9cije.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668720/939b0ca3-aef6-4500-bab9-38e8e76490b8_xgqipb.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668718/IMG_8531_orzw2a.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668718/_DSC7885_-_01_txwgqb.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668717/_DSC7435_-_01_mhidw4.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668717/_DSC7399_-_01_cx8nqx.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668717/_DSC7835_-_01_ujhjtu.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668714/_DSC7493_-_01_wsmckq.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668714/_DSC7792_-_01_x7u24h.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668713/_DSC7503_-_01_tu5ltx.jpg',
    ],
    'Innovatex': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201574/20250416_195451_arkgt3.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201572/20250416_203859_z8vzzr.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201571/20250416_205407_q0ewhb.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201568/20250416_204127_kwuxja.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201567/20250416_205057_kvj6ul.heic',
    ],
    'Iotopia': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667697/IMG_6734_c8zsf3.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667696/IMG_6728_ojlrco.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667694/IMG_6710_dvb3iv.jpg',
    ],
    'Nexovate': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200875/WhatsApp_Image_2025-09-29_at_08.02.39_1_i3hodq.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200874/WhatsApp_Image_2025-09-29_at_08.02.37_og2gtc.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200872/WhatsApp_Image_2025-09-29_at_08.02.40_pcbe0g.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200871/WhatsApp_Image_2025-09-29_at_08.02.38_yectm8.jpg',
    ],
    'NMAN': [
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
    ],
    'SheLeads': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761201335/IMG-20250307-WA0041_qm0zos.jpg',
    ],
    'Srujana': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667988/IMG_6796_g6qufj.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667985/IMG20250915153457_qyvdo5.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667985/IMG20250914175434_gdiy5h.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667983/IMG20250914175224_wbykbt.jpg',
    ],
  },
  Official: {
    'Dizzy': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199130/IMG-20250228-WA0030_dbhjh0.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199129/IMG-20250228-WA0026_iyugyr.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199129/IMG-20250228-WA0020_xhs0n8.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199128/IMG-20250228-WA0035_zzbbsi.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199127/IMG-20250228-WA0017_zjla8t.jpg',
    ],
    'IIST-Trivandrum': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668034/IMG_8416_kjl4st.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668032/17-10-202506_31_26PM_49_ByGPSMapCamera_xbpm4l.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668020/IMG_8444_esa682.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668024/IMG_8449_opn4wk.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668027/IMG_8451_csnutw.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668030/IMG_8366_s76vkr.heic',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668038/IMG_8426_agb04o.jpg',
    ],
    'NEXOVATE': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200976/WhatsApp_Image_2025-09-29_at_08.02.33_tqnosd.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200979/WhatsApp_Image_2025-09-29_at_08.02.38_2_l6m8pe.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200977/WhatsApp_Image_2025-09-29_at_08.02.43_ju8did.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761200977/WhatsApp_Image_2025-09-29_at_08.02.39_g26xpi.jpg',
    ],
    'SheLeads': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199437/IMG-20250307-WA0050_pxsaaa.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199436/IMG-20250307-WA0033_rkrvua.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199437/IMG-20250307-WA0030_kaysdh.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761199435/20250307_160256_0_rv4zs1.heic',
    ],
    'Srujana': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668004/IMG20250915160417_01_izbhlf.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668007/IMG20250915171742_aoai1m.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668000/IMG20250915165018_otfht1.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761667998/IMG20250915171929_j7zjtp.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761668003/IMG20250915171418_rlfilw.jpg',
    ],
    'IEEE': [
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761674222/WhatsApp_Image_2025-10-28_at_23.25.08_1_azrpm0.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761674232/WhatsApp_Image_2025-10-28_at_23.25.06_nplrdc.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761674243/WhatsApp_Image_2025-10-28_at_23.25.08_ngabub.jpg',
      'https://res.cloudinary.com/dswllszlj/image/upload/v1761674254/WhatsApp_Image_2025-10-28_at_23.25.07_tgdwth.jpg',
    ],
  },
};

/**
 * Helper function to get all images from a specific category
 * @param category - 'BTS' | 'Official' | 'Other'
 * @returns Array of all image URLs in that category
 */
export function getImagesByCategory(category: keyof CloudinaryImagesConfig): string[] {
  const folder = CLOUDINARY_IMAGES[category];
  if (!folder) return [];
  
  return Object.values(folder).flat();
}

/**
 * Helper function to get all images from a specific folder within a category
 * @param category - 'BTS' | 'Official' | 'Other'
 * @param folderName - The specific folder name
 * @returns Array of image URLs
 */
export function getImagesByFolder(
  category: keyof CloudinaryImagesConfig,
  folderName: string
): string[] {
  return CLOUDINARY_IMAGES[category]?.[folderName] || [];
}

/**
 * Get a random image from a category
 */
export function getRandomImageFromCategory(category: keyof CloudinaryImagesConfig): string | null {
  const images = getImagesByCategory(category);
  if (images.length === 0) return null;
  return images[Math.floor(Math.random() * images.length)];
}

/**
 * Get a random image from a specific folder
 */
export function getRandomImageFromFolder(
  category: keyof CloudinaryImagesConfig,
  folderName: string
): string | null {
  const images = getImagesByFolder(category, folderName);
  if (images.length === 0) return null;
  return images[Math.floor(Math.random() * images.length)];
}

/**
 * Get total count of images in a category
 */
export function getImageCountByCategory(category: keyof CloudinaryImagesConfig): number {
  return getImagesByCategory(category).length;
}

export default CLOUDINARY_IMAGES;
