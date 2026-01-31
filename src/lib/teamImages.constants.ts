/**
 * Team Member Images - Cloudinary URLs
 * 
 * Organized collection of team member profile images
 * All images should be background-removed PNGs for best card effects
 */

export interface TeamImages {
  [memberName: string]: string;
}

export const TEAM_IMAGES: TeamImages = {
  meghnath: "https://res.cloudinary.com/dswllszlj/image/upload/f_auto,q_auto/v1769857326/Meghnath-BG-Removed_prn3cn.png",
  priyodip: "https://res.cloudinary.com/dswllszlj/image/upload/f_auto,q_auto/v1769586413/Priyo-BG-Removed_xnwgkx.png",
  vishnu: "https://res.cloudinary.com/dswllszlj/image/upload/f_auto,q_auto,w_800/v1768210385/IMG_7119_3_Background_Removed_snagkq.png",
  tharun: "https://res.cloudinary.com/dswllszlj/image/upload/f_auto,q_auto/v1769857327/Tharun-BG-Removed_jmf3nh.png",
  vivek: "https://res.cloudinary.com/dswllszlj/image/upload/f_auto,q_auto/v1769857327/Vivek-BG-Removed_crkj1y.png",
  devanandana: "https://res.cloudinary.com/dswllszlj/image/upload/f_auto,q_auto,c_scale,w_400/v1769077483/Deva-BG-Removed_jwgyaq.png",
  vedha: "https://res.cloudinary.com/dswllszlj/image/upload/f_auto,q_auto/v1769857327/Vedha-BG-Removed_dxbcte.png",
  kinshuepriya: "",
};

// Placeholder avatar for members without photos
export const PLACEHOLDER_AVATAR = "https://via.placeholder.com/300x300/6366f1/ffffff?text=Avatar";

/**
 * Get team member image by name (case-insensitive)
 */
export function getTeamImage(name: string): string {
  const key = name.toLowerCase().replace(/\s+/g, '');
  return TEAM_IMAGES[key] || PLACEHOLDER_AVATAR;
}
