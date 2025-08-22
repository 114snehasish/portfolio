import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    console.log('Opening page...');
    const page = await browser.newPage();

    // Get the current file's directory (equivalent to __dirname in CommonJS)
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Get the absolute path to the HTML file
    // Update these file names to match your CV files (replace with your actual CV file names)
    const htmlPath = path.resolve(
      __dirname,
      '../../public/Snehasish_Chakraborty_CV.html'
    );
    const pdfPath = path.resolve(
      __dirname,
      '../../public/Snehasish_Chakraborty_CV.pdf'
    );

    console.log(`Loading HTML from: ${htmlPath}`);

    // Check if the HTML file exists
    if (!fs.existsSync(htmlPath)) {
      throw new Error(`HTML file not found at: ${htmlPath}`);
    }

    // Load the HTML file
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    // Set the viewport to ensure proper rendering
    await page.setViewport({ width: 1200, height: 1600 });

    console.log('Generating PDF...');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
      preferCSSPageSize: true,
    });

    console.log(`PDF generated successfully at: ${pdfPath}`);
    await browser.close();

    console.log('Browser closed. Process complete.');
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
