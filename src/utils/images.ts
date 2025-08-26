import pictureOriginal from '@assets/picture.jpg';

// For development, we'll use the original image
// For production, the build process will replace these with the actual hashed filenames
export const profileImageWebP = pictureOriginal;
export const profileImageThumb = pictureOriginal;
export const profileImageFallback = pictureOriginal;
export const seoImage = pictureOriginal;

// Function to get the correct SEO image URL without hardcoding domain
export const getSEOImageUrl = () => {
  // This will be replaced by the build process with the correct hashed filename
  return '/assets/picture-seo.jpg';
};

export { pictureOriginal };
