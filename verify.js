const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: "new"
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle2' });
  const title = await page.title();
  console.log('Title:', title);
  await page.screenshot({ path: path.resolve(__dirname, 'preview-oceanside.png') });
  console.log('Screenshot verified!');
  await browser.close();
})();
