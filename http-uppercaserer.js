// MY SOLUTION
// READ ME: NO 3rd PARTY MODULES

// var http = require('http');

// var map = require('through2-map');

// uc = map(function(chunk) {
//   return chunk.toString().toUpperCase();
// });

// server = http.createServer(function(request, response) {
//   if (request.method == 'POST') {
//     request.pipe(uc).pipe(response);
//   }
// });
// server.listen(process.argv[2]);

// OFFICIAL SOLUTION

// var http = require('http');
//     var map = require('through2-map');
    
//     var server = http.createServer(function (req, res) {
//       if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//       }
    
//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })
    
//     server.listen(Number(process.argv[2]));

// CLASS SOLUTION

var http = require('http');

    var server = http.createServer(function(reg, res) {
      if (req.method === 'POST') {
        var incomingData = '';
        req.on('data', function(data) {
          incomingData += data;
        });
        req.on('end', function() {
          // guaranteeing all POST data has come in by this point
          var upper = incomingData.toUpperCase();
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(upper);
        })
      }
    });
    server.listen(process.argv[2]);