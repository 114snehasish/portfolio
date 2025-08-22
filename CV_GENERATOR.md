# CV Generator Documentation

This project includes an automated CV generation system that converts an HTML resume into a professional PDF format using Puppeteer.

## 📄 Overview

The CV generator creates a professional-looking PDF resume from an HTML template, maintaining consistent styling and layout across all pages. The system is designed to be easily customizable and can be adapted for any portfolio website.

## 🗂 File Structure

```
project-root/
├── public/
│   ├── [YOUR_NAME]_CV.html      # HTML CV template
│   ├── [YOUR_NAME]_CV.pdf       # Generated PDF (created by script)
│   └── CV_README.md             # Basic CV information
├── src/scripts/
│   └── generatePDF.js           # PDF generation script
└── package.json                 # Contains the generate-cv script
```

## 🔧 Setup & Configuration

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn package manager
- Puppeteer (installed as dev dependency)

### Installation

The required dependencies should already be installed when you run:

```bash
npm install
```

## 📋 How to Generate Your CV

### Step 1: Customize the HTML Template

1. Update the HTML file in the `public/` directory with your personal information
2. Replace placeholder content with your:
   - Personal details and contact information
   - Professional experience
   - Projects and achievements
   - Technical skills
   - Any other relevant sections

### Step 2: Update File References

In `src/scripts/generatePDF.js`, ensure the file paths match your naming convention:

```javascript
// Update these paths to match your file names
const htmlPath = path.resolve(__dirname, '../../public/YOUR_NAME_CV.html');
const pdfPath = path.resolve(__dirname, '../../public/YOUR_NAME_CV.pdf');
```

### Step 3: Generate the PDF

Run the generation script:

```bash
npm run generate-cv
```

This will:
- Launch a headless browser instance
- Load your HTML CV
- Apply print-specific styling
- Generate a PDF with proper margins and page breaks
- Save the PDF to the public directory

## 🎨 Customization Options

### Styling

The CV uses CSS custom properties (variables) for easy theming:

```css
:root {
  --primary-color: #0a192f;      /* Main background color */
  --secondary-color: #37e784;    /* Accent color */
  --text-color: #ccd6f6;         /* Main text color */
  --caption-color: #87bdf8;      /* Subtitle color */
  --content-color: #8892b0;      /* Content text color */
}
```

### Page Layout

The system includes intelligent page break handling:
- Prevents section titles from appearing alone at page bottom
- Keeps related content together when possible
- Maintains consistent margins across all pages
- Handles content overflow gracefully

### PDF Settings

Key PDF generation settings in `generatePDF.js`:

```javascript
await page.pdf({
  format: 'A4',                    // Paper size
  printBackground: true,           // Include background colors
  margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
  preferCSSPageSize: true         // Use CSS page settings
});
```

## 🚀 Integration with Portfolio

### Header Download Button

The CV is automatically available for download through the portfolio header:

```typescript
// In navigation configuration
{
  to: '/YOUR_NAME_CV.pdf',
  label: '/resume',
  type: 'button',
  icon: FaFile,
}
```

### Contact Section

The CV can also be accessed through the contact section social links.

## 🔍 Troubleshooting

### Common Issues

**PDF not generating:**
- Ensure HTML file exists in the correct location
- Check file paths in the generation script
- Verify Puppeteer is properly installed

**Styling issues:**
- Confirm CSS print media queries are correctly applied
- Check that custom properties are defined
- Ensure fonts are loading properly

**Page break problems:**
- Review CSS page-break rules
- Adjust content length in sections
- Modify margin and padding settings

### Debug Mode

To debug PDF generation, modify the Puppeteer launch options:

```javascript
const browser = await puppeteer.launch({
  headless: false,  // Set to false to see browser window
  devtools: true,   // Enable developer tools
});
```

## 📝 Best Practices

### Content Guidelines

- **Keep it concise**: Aim for 2-3 pages maximum
- **Use consistent formatting**: Maintain uniform styling throughout
- **Include keywords**: Add relevant technical terms for ATS systems
- **Professional language**: Use action verbs and quantifiable achievements

### Technical Considerations

- **File naming**: Use consistent naming conventions
- **Version control**: Keep HTML templates in version control
- **Security**: Ensure no sensitive information is exposed
- **Accessibility**: Include proper ARIA labels and semantic HTML

### Maintenance

- **Regular updates**: Keep content current with latest experience
- **Test generation**: Verify PDF output after any changes
- **Backup files**: Maintain copies of both HTML and generated PDFs

## 🛡 Security & Privacy Considerations

### Personal Information
- The HTML CV template contains personal information (name, email, experience, etc.)
- This information will be visible in your repository if it's public
- Consider using a private repository if you prefer to keep CV details confidential

### File Contents Review
- Review the generated PDF before distributing to ensure no unintended information is included
- The HTML template should not contain any passwords, API keys, or sensitive system information
- Contact information (email, LinkedIn, etc.) is expected and appropriate for professional CVs

### Best Practices
- Use professional email addresses and public profile links only
- Avoid including sensitive personal details beyond standard resume information
- Keep the CV content focused on professional qualifications and achievements
- Regularly update content to ensure accuracy and relevance

## 📞 Support

If you encounter issues with CV generation:

1. Check that all file paths are correct
2. Ensure all dependencies are installed
3. Verify the HTML template is valid
4. Test with a simplified template if problems persist

For additional help, refer to the main project documentation or open an issue in the repository.

---

**Note**: This CV generator system is designed to be flexible and customizable. Adapt the configuration and styling to match your personal branding and requirements.
