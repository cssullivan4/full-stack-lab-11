// MY SOLUTION

var fs = require('fs');

var filename = process.argv[2];

file = fs.readFile(filename, function (err, data) { // worked but missing error stdout
    console.log(data.toString().split('\n').length - 1);
});

// OFFICIAL SOLUTION

// var fs = require('fs')
//     var file = process.argv[2]
    
//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })