const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            console.log('Credentials intercepted:', body);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Login Successful</h1>');
        });
    } else {
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Error 404: Page Not Found</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
}).listen(3000, () => {
    console.log('Honeypot server running on port 3000');
});