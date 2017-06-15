// file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html

// MY SOLUTION

var fs = require('fs');
var http = require('http');

var filename = process.argv[3];

var server = http.createServer(function(request, response) {
  fs.createReadStream(filename).pipe(response); // memory
});
server.listen(process.argv[2]);

// OFFICIAL SOLUTION

// var http = require('http');
//     var fs = require('fs');
    
//     var server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' }) // always write head
    
//       fs.createReadStream(process.argv[3]).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]))