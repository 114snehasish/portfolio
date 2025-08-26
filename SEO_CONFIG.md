# SEO Configuration and Guidelines

This file contains SEO configuration details and guidelines for the portfolio website.

## Domain Configuration
- **Primary Domain**: https://snehasish-chakraborty.com/
- **Alternative Domain**: https://www.snehasish-chakraborty.com/
- **LinkedIn Profile**: https://www.linkedin.com/in/snehasish-chakraborty114
- **GitHub Profile**: https://github.com/114snehasish
- **Twitter Handle**: @thisissnehasish

## Files Added for SEO:

### 1. `/public/robots.txt`
- Allows all web crawlers to index the site
- Specifies allowed file types and directories
- References the sitemap location

### 2. `/public/sitemap.xml`
- Contains main page and CV PDF URLs
- Update the domain URLs when deploying
- Add more pages if your site grows

### 3. `/public/manifest.json`
- PWA manifest for better mobile experience
- Enables "Add to Home Screen" functionality

### 4. Enhanced `index.html`
- Comprehensive meta tags for SEO
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Schema.org structured data (JSON-LD)
- Preload directives for performance

## Meta Tags Added:

### Primary SEO Tags:
- Title, description, keywords
- Canonical URL
- Author information
- Robots directive

### Social Media Tags:
- **Open Graph**: Facebook, LinkedIn sharing
- **Twitter Cards**: Rich Twitter previews
- **LinkedIn**: Professional network optimization

### Technical SEO:
- Schema.org Person markup
- Theme color for mobile browsers
- Preload critical resources
- Manifest file reference

## Content Strategy:
The meta descriptions and titles are based on your about section, highlighting:
- Full Stack Development expertise
- Team Leadership experience
- Cloud and DevOps skills
- End-to-End product delivery

## Image Optimization:
- Profile image (`/assets/picture.jpg`) is used for social sharing
- Recommended size: 1200x630px for optimal social media display
- Alt text provided for accessibility

## Action Items:
1. ✅ **Domain Updated**: All URLs now use https://snehasish-chakraborty.com
2. ✅ **Social Media Links**: LinkedIn, GitHub, and Twitter profiles are properly configured
3. ✅ **Twitter Handle**: Updated to @thisissnehasish across all meta tags and structured data
4. **Optimize your profile image** (`/assets/picture.jpg`) to 1200x630px for best social sharing
5. **Test the implementation** using tools like:
   - Google Search Console
   - Facebook Sharing Debugger
   - Twitter Card Validator
   - LinkedIn Post Inspector

## Performance Considerations:
- Critical resources are preloaded
- Non-critical resources are prefetched
- Images have proper alt tags for accessibility
- Structured data helps search engines understand content
