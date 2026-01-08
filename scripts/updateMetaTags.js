import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { resolve } from 'path';

// This script runs after build to update meta tags and JS with correct URLs
function updateAssetReferences() {
  const distPath = resolve('./dist');
  const htmlPath = resolve(distPath, 'index.html');
  const assetsDir = resolve(distPath, 'assets');
  
  try {
    // Find the actual hashed asset filenames
    const files = readdirSync(assetsDir);
    
    // Find the optimized images with hash
    const seoImage = files.find(f => f.includes('picture') && f.includes('seo') && f.endsWith('.jpg'));
    const optimizedWebP = files.find(f => f.includes('picture') && f.includes('optimized') && f.endsWith('.webp'));
    const thumbWebP = files.find(f => f.includes('picture') && f.includes('thumb') && f.endsWith('.webp'));
    const fallbackJpg = files.find(f => f.includes('picture') && f.includes('fallback') && f.endsWith('.jpg'));
    
    // Update HTML meta tags
    let html = readFileSync(htmlPath, 'utf-8');
    
    if (seoImage) {
      html = html.replace(/\/assets\/picture-seo\.jpg/g, `/assets/${seoImage}`);
      console.log(`✅ Updated SEO image references to: ${seoImage}`);
    }
    
    if (optimizedWebP) {
      html = html.replace(/\/assets\/picture-optimized\.webp/g, `/assets/${optimizedWebP}`);
      console.log(`✅ Updated preload image references to: ${optimizedWebP}`);
    }
    
    writeFileSync(htmlPath, html);
    
    // Update JS bundle references
    const jsFiles = files.filter(f => f.endsWith('.js'));
    for (const jsFile of jsFiles) {
      const jsPath = resolve(assetsDir, jsFile);
      let jsContent = readFileSync(jsPath, 'utf-8');
      
      // Replace the relative path references in the JS bundle
      if (optimizedWebP) {
        jsContent = jsContent.replace(/\/assets\/picture-optimized\.webp/g, `/assets/${optimizedWebP}`);
      }
      if (thumbWebP) {
        jsContent = jsContent.replace(/\/assets\/picture-thumb\.webp/g, `/assets/${thumbWebP}`);
      }
      if (fallbackJpg) {
        jsContent = jsContent.replace(/\/assets\/picture-fallback\.jpg/g, `/assets/${fallbackJpg}`);
      }
      
      writeFileSync(jsPath, jsContent);
      console.log(`✅ Updated JS bundle: ${jsFile}`);
    }
    
    console.log('✅ All asset references updated successfully');
  } catch (error) {
    console.error('❌ Error updating asset references:', error);
  }
}

updateAssetReferences();
