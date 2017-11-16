const fs = require('fs');
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile('index.html', function (err, data) {
        if (err) throw err;
        res.write(data);
        res.end();
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

