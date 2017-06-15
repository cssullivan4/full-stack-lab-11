// MY SOLUTION

function plus(x, y) {
    return x + y
}
    console.log(process.argv.slice(2).map(Number).reduce(plus));

// OFFICIAL SOLUTION

// var result = 0;
    
//     for (var i = 2; i < process.argv.length; i++) {
//       result += Number(process.argv[i]);
// OR    result += +(process.argv[i]);
//     }
//     console.log(result)