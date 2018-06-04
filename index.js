const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request', function (request, response) {
   response.setHeader("Content-Type", "text/html; charset=utf-8");
   if (request.url) {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
            });
    } else {
        fs.readFile('./cat.jpg', 'utf-8', function(err, data) {
            response.writeHead(404, {'Content-Type': 'image/jpg'});
            response.write(data);
            response.end();
        });
    }
});
server.listen(9000);
