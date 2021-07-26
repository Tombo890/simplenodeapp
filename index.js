const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Hellow, World</h1>');
    }
});

// Port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server running on port ${PORT}'));
