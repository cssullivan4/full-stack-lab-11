// MY SOLUTION
var fs = require('fs')

var dirname = process.argv[2];
var ext = process.argv[3];
var path = RegExp('\\.' + ext + '$');
    
file = fs.readdir(dirname, function (err, files) { // MISSING ERROR AGAIN
      for (i = 0; i < files.length; i++) {
          if (path.test(files[i])) {
              console.log(files[i]);
          }
      }
});

// OFFICIAL SOLUTION // uses for each loop

// var fs = require('fs')
//     var path = require('path')
    
//     var folder = process.argv[2] // folder to look at
//     var ext = '.' + process.argv[3] // file extension to look for (always to be html md or txt, why needed to add string concatenation)
    
//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })