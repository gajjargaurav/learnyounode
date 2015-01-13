var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString();
var countArray = str.split('\n');
console.log(countArray.length - 1);