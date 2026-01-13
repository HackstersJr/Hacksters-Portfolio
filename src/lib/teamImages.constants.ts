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
  meghnath: "",
  priyodip: "",
  vishnu: "https://res.cloudinary.com/dswllszlj/image/upload/f_auto,q_auto,w_800/v1768210385/IMG_7119_3_Background_Removed_snagkq.png",
  tharun: "",
  vivek: "",
  devanandana: "",
  vedha: "",
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
