import sharp from 'sharp';
import { basename, dirname, extname } from 'path';
import type { Plugin, ResolvedConfig } from 'vite';

interface ImageAsset {
  fileName: string;
  asset: {
    type: 'asset';
    fileName?: string;
    name?: string;
    source: string | Uint8Array | Buffer;
  };
}

export function imageOptimization(): Plugin {
  let isProduction = false;
  
  return {
    name: 'image-optimization',
    configResolved(config: ResolvedConfig): void {
      isProduction = config.command === 'build';
    },
    async generateBundle(options, bundle): Promise<void> {
      if (!isProduction) return;

      const imagesToProcess: ImageAsset[] = [];
      
      // Find all image assets in the bundle
      for (const [fileName, asset] of Object.entries(bundle)) {
        if (asset.type === 'asset' && /\.(jpg|jpeg|png)$/i.test(fileName)) {
          imagesToProcess.push({ fileName, asset: asset as ImageAsset['asset'] });
        }
      }

      for (const { fileName, asset } of imagesToProcess) {
        // Handle different types of asset sources
        let originalBuffer: Buffer;
        if (Buffer.isBuffer(asset.source)) {
          originalBuffer = asset.source;
        } else if (typeof asset.source === 'string') {
          originalBuffer = Buffer.from(asset.source, 'utf-8');
        } else {
          originalBuffer = Buffer.from(asset.source);
        }
        
        const name = basename(fileName, extname(fileName));
        const outputDir = dirname(fileName);
        
        try {
          // Create SEO version (1200x630 JPG) - Smart crop for social media
          const seoBuffer = await sharp(originalBuffer)
            .resize(1200, 630, { 
              fit: 'cover', 
              position: 'center'  // This ensures we get the center part of the image
            })
            .jpeg({ quality: 85 })
            .toBuffer();
          
          const seoFileName = `${outputDir}/${name}-seo.jpg`;
          this.emitFile({
            type: 'asset',
            fileName: seoFileName,
            source: seoBuffer
          });

          // Create WebP version - maintain aspect ratio, max width 400px
          const webpBuffer = await sharp(originalBuffer)
            .resize(400, null, { 
              fit: 'inside',
              withoutEnlargement: true
            })
            .webp({ quality: 80 })
            .toBuffer();
          
          const webpFileName = `${outputDir}/${name}-optimized.webp`;
          this.emitFile({
            type: 'asset',
            fileName: webpFileName,
            source: webpBuffer
          });

          // Create thumbnail WebP - maintain aspect ratio, max width 300px, higher quality
          const thumbBuffer = await sharp(originalBuffer)
            .resize(300, null, { 
              fit: 'inside',
              withoutEnlargement: true
            })
            .webp({ quality: 85, effort: 4 })  // Higher quality and better compression algorithm
            .toBuffer();
          
          const thumbFileName = `${outputDir}/${name}-thumb.webp`;
          this.emitFile({
            type: 'asset',
            fileName: thumbFileName,
            source: thumbBuffer
          });

          // Create fallback JPG - maintain aspect ratio, max width 400px
          const fallbackBuffer = await sharp(originalBuffer)
            .resize(400, null, { 
              fit: 'inside',
              withoutEnlargement: true
            })
            .jpeg({ quality: 85 })
            .toBuffer();
          
          const fallbackFileName = `${outputDir}/${name}-fallback.jpg`;
          this.emitFile({
            type: 'asset',
            fileName: fallbackFileName,
            source: fallbackBuffer
          });

          console.log(`✅ Generated optimized images for ${fileName}`);
        } catch (error) {
          console.error(`❌ Error processing ${fileName}:`, error);
        }
      }
    }
  };
}
