const scrape = require('website-scraper').default;
const PuppeteerPlugin = require('website-scraper-puppeteer').default;
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

scrape({
    urls: ['https://www.oceansideai.io/'],
    directory: path.resolve(__dirname, 'dist'),
    plugins: [
        new PuppeteerPlugin({
            launchOptions: {
                executablePath: chromePath,
                headless: 'new',
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            },
            scrollToBottom: { timeout: 15000, viewportN: 10 },
            blockNavigation: true,
        })
    ],
    sources: [
        {selector: 'img', attr: 'src'},
        {selector: 'img', attr: 'data-src'},
        {selector: 'img', attr: 'srcset'},
        {selector: 'link[rel="stylesheet"]', attr: 'href'},
        {selector: 'script', attr: 'src'},
        {selector: 'source', attr: 'src'},
        {selector: 'source', attr: 'srcset'}
    ]
}).then((result) => {
    console.log("Website successfully downloaded");
}).catch((err) => {
    console.log("An error occurred", err);
});
