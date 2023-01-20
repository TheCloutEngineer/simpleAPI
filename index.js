const http = require('http');

const PORT = 5000;
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === "/")
        res.statusCode = 200;
        res.end();
})

server.listen(PORT, (err, res) => {
    console.log("Server listening on port" + PORT);
    console.log(`Server on http://localhost:{PORT}`)
})
