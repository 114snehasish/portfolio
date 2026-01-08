# 📋 CV Generator Guide

> *"Why manually create PDFs when you can automate your way to employment?"* 🤖💼

## 🎯 Your Simple CV Setup

You have a **Puppeteer-based CV generator** that converts HTML to PDF automatically!

## 🔄 How It Works

```
Your HTML CV → Puppeteer (Headless Browser) → Professional PDF
```

## 📁 What You Actually Have

### Files in `public/`:
- **`Snehasish_Chakraborty_CV.html`** - Your styled HTML CV
- **`Snehasish_Chakraborty_CV.pdf`** - Generated PDF version
- **`CV_README.md`** - Quick reference guide

### Script:
- **`src/scripts/generatePDF.js`** - The magic PDF generator using Puppeteer

### Command:
- **`npm run generate-cv`** - One command to rule them all!

## ⚡ How to Generate Your CV

### Super Simple:
```bash
npm run generate-cv
```

That's it! The script:
1. **🌐 Opens your HTML CV** in a headless browser
2. **📄 Converts to A4 PDF** with proper margins
3. **💾 Saves to public folder** ready for download
4. **✅ Reports success** or any errors

## 🛠️ The Technical Details

### Puppeteer Configuration:
- **Format**: A4 paper size
- **Margins**: None (your HTML handles the layout)
- **Background**: Prints background colors and images
- **Viewport**: 1200x1600 for proper rendering
- **Wait**: Until all network resources load

### PDF Settings:
```javascript
{
  format: 'A4',
  printBackground: true,
  margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' },
  preferCSSPageSize: true
}
```

## 💡 Customizing Your CV

### Update Content:
1. **Edit**: `public/Snehasish_Chakraborty_CV.html`
2. **Style**: Add CSS directly in the HTML file
3. **Generate**: Run `npm run generate-cv`
4. **Test**: Check the new PDF

### Change File Names:
Update the paths in `src/scripts/generatePDF.js`:
```javascript
const htmlPath = '../../public/YourName_CV.html';
const pdfPath = '../../public/YourName_CV.pdf';
```

## 🎯 Benefits

- **📱 Responsive**: Looks great on web and print
- **🎨 Styled**: Matches your portfolio design
- **⚡ Automated**: No manual PDF creation needed
- **🔄 Version Control**: HTML source is tracked in Git
- **📊 ATS-Friendly**: Structured for applicant tracking systems

## 🔧 Troubleshooting

### PDF Generation Fails?
1. **Check HTML exists**: `public/Snehasish_Chakraborty_CV.html`
2. **Valid HTML**: Ensure no syntax errors
3. **Dependencies**: Run `npm install` (installs Puppeteer)
4. **Permissions**: Make sure you can write to `public/` folder

### PDF Looks Wrong?
- **CSS Issues**: Check your HTML styling
- **Page Breaks**: Add CSS page-break rules
- **Font Missing**: Use web-safe fonts or web fonts

---

**🎉 Professional PDF generation made simple! 🎉**