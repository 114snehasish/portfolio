/// <reference types="vite-imagetools/client" />

// General pattern for any image query
declare module '*.jpg?*' {
  const src: string;
  export default src;
}

declare module '*.jpeg?*' {
  const src: string;
  export default src;
}

declare module '*.png?*' {
  const src: string;
  export default src;
}

declare module '*.webp?*' {
  const src: string;
  export default src;
}

// Specific patterns
declare module '*?webp' {
  const src: string;
  export default src;
}

declare module '*?thumb' {
  const src: string;
  export default src;
}

declare module '*?seo' {
  const src: string;
  export default src;
}

declare module '*&webp' {
  const src: string;
  export default src;
}

declare module '*&thumb' {
  const src: string;
  export default src;
}

declare module '*&seo' {
  const src: string;
  export default src;
}
