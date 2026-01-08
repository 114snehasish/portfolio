import pictureOriginal from '@assets/picture.jpg';

// Use Vite's import.meta.url to get the base URL dynamically
export const getImageUrls = () => {
  const baseUrl = import.meta.env.PROD ? new URL(import.meta.url).origin : '';

  return {
    // For SEO meta tags - optimized social sharing size
    seoImage: `${baseUrl}/src/assets/picture.jpg?seo`,
    // For component usage - WebP optimized
    webpImage: `${baseUrl}/src/assets/picture.jpg?webp`,
    // For mobile/thumb - smaller WebP
    thumbImage: `${baseUrl}/src/assets/picture.jpg?thumb`,
    // Fallback original
    originalImage: pictureOriginal,
  };
};

// Hook to get the correct image URL for SEO meta tags
export const useSEOImage = () => {
  if (typeof window !== 'undefined') {
    return `${window.location.origin}/src/assets/picture.jpg?seo`;
  }
  return '/src/assets/picture.jpg?seo';
};
