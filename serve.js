const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const REMOTE_ORIGIN = 'https://www.oceansideai.io';

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.svg': 'image/svg+xml',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  // Map Next.js static asset routes
  if (reqPath.startsWith('/_next/static/chunks/') || reqPath.startsWith('/_next/static/js/')) {
    reqPath = '/js/' + reqPath.split('/').pop();
  } else if (reqPath.startsWith('/_next/static/media/')) {
    reqPath = '/fonts/' + reqPath.split('/').pop();
  } else if (reqPath.startsWith('/_next/static/css/')) {
    reqPath = '/css/' + reqPath.split('/').pop();
  } else if (reqPath.startsWith('/calls/') || reqPath.startsWith('/logos/')) {
    reqPath = '/images/' + reqPath.split('/').pop();
  }

  // Check if it already exists locally in images/
  if (reqPath.startsWith('/integrations/fav/')) {
    const filename = reqPath.split('/').pop();
    const localImg = path.join(__dirname, 'images', filename);
    if (fs.existsSync(localImg) && fs.statSync(localImg).isFile()) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      fs.createReadStream(localImg).pipe(res);
      return;
    }
  }

  // Try root dir first, then dist/
  let filePath = path.join(__dirname, reqPath);
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    filePath = path.join(__dirname, 'dist', reqPath);
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else if (reqPath.startsWith('/integrations/')) {
    // Proxy and cache missing SVG / PNG integrations icons directly from source
    const remoteUrl = REMOTE_ORIGIN + reqPath;
    https.get(remoteUrl, remoteRes => {
      if (remoteRes.statusCode === 200) {
        const ext = path.extname(reqPath).toLowerCase();
        const contentType = remoteRes.headers['content-type'] || MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        
        // Save to disk for local cache
        const localSavePath = path.join(__dirname, reqPath);
        fs.mkdirSync(path.dirname(localSavePath), { recursive: true });
        const fileStream = fs.createWriteStream(localSavePath);
        remoteRes.pipe(fileStream);
        remoteRes.pipe(res);
      } else {
        res.writeHead(remoteRes.statusCode, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    }).on('error', err => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Proxy error: ' + err.message);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found: ' + reqPath);
  }
});

server.listen(PORT, () => {
  console.log('Local clone server running at http://localhost:' + PORT);
});
