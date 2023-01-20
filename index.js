const http = require('http');

const PORT = 5001;
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === "/")
        res.statusCode = 200;
        res.end();
})

server.listen(PORT, () => {
    console.info("Server listening on port " + PORT);
    console.log(`Server on http://localhost:${PORT}`)
})
