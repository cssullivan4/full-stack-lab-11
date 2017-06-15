var http = require('http');
var url = require('url');
// CLASS SOLUTION
var server = http.createServer(function(req, res) {
    if (req.method === 'GET') { 
        // but still have 2 possibilities
        // console.log(req.url); // just to see what looks like for self on 'run'
        
        var urlData = url.parse(req.url, true); 
        // pathname is object returned from parse property
        
        if (urlData.pathname === '/api/parsetime') {
            var d = new Date(urlData.query.iso); // passing in ISO string
            var data = {
                hour: d.getHours(),
                minute: d.getMinutes(),
                second: d.getSeconds()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' }); 
            // when ready to respond, first write head

            res.end(JSON.stringify(data)); 
            //pass in what want to respond WITH (data) but need make object literal into JSON
        }
        else if (urlData.pathname === '/api/unixtime') {
            var d = new Date(urlData.query.iso);
            var data = {
                unixtime: d.getTime() // # milliseconds since 1/1/1970
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        }
        else {
            res.writeHead(404);
            res.end('');
        }
    }
})

server.listen(process.argv[2]);

// OFFICIAL SOLUTION

    // var http = require('http')
    // var url = require('url')
    
    // function parsetime (time) {
    //   return {
    //     hour: time.getHours(),
    //     minute: time.getMinutes(),
    //     second: time.getSeconds()
    //   }
    // }
    
    // function unixtime (time) {
    //   return { unixtime: time.getTime() }
    // }
    
    // var server = http.createServer(function (req, res) {
    //   var parsedUrl = url.parse(req.url, true)
    //   var time = new Date(parsedUrl.query.iso)
    //   var result
    
    //   if (/^\/api\/parsetime/.test(req.url)) {
    //     result = parsetime(time)
    //   } else if (/^\/api\/unixtime/.test(req.url)) {
    //     result = unixtime(time)
    //   }
    
    //   if (result) {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(result))
    //   } else {
    //     res.writeHead(404)
    //     res.end()
    //   }
    // })
    // server.listen(Number(process.argv[2]))