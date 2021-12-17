var http = require('http');
http.createServer(function (req,res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.end('<h1>My Portfolio</h1><p><a href="http://staufferb.ddns.net">link to home</a></p>');
}).listen(3000, "127.0.0.1");
console.log('Server running on 3000');

