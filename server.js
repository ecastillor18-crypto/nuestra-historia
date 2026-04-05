const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.ogg': 'video/ogg',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range');
    res.setHeader('Accept-Ranges', 'bytes');

    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    
    // Decodificar URL (convertir %20 a espacio, etc.)
    pathname = decodeURIComponent(pathname);

    if (pathname === '/') {
        pathname = '/index.html';
    }

    const filePath = path.join(__dirname, pathname);
    
    console.log(`Request: ${req.url} -> ${filePath}`);

    // Seguridad: no permitir acceso fuera del directorio
    const normalizedPath = path.normalize(filePath);
    const baseDir = path.normalize(__dirname);
    
    if (!normalizedPath.startsWith(baseDir)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error(`File not found: ${filePath}`);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
            return;
        }

        if (stats.isDirectory()) {
            const indexFile = path.join(filePath, 'index.html');
            fs.stat(indexFile, (err) => {
                if (err) {
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('File not found');
                } else {
                    serveFile(indexFile, res, req);
                }
            });
        } else {
            serveFile(filePath, res, req);
        }
    });
});

function serveFile(filePath, res, req) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal server error');
            return;
        }

        const fileSize = stats.size;
        const range = req.headers.range;

        if (range && range.match(/bytes=/)) {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunkSize = (end - start) + 1;

            res.writeHead(206, {
                'Content-Type': contentType,
                'Content-Length': chunkSize,
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Cache-Control': 'no-cache'
            });
            fs.createReadStream(filePath, { start: start, end: end }).pipe(res);
            console.log(`Served (206): ${filePath} bytes ${start}-${end}/${fileSize}`);
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Content-Length': fileSize,
                'Accept-Ranges': 'bytes',
                'Cache-Control': 'no-cache'
            });
            fs.createReadStream(filePath).pipe(res);
            console.log(`Served (200): ${filePath} (${contentType})`);
        }
    });
}

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Press Ctrl+C to stop');
});
