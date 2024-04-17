// Read From An External File
//import input.txt file to read out
var fs = require('fs');
console.log('Read From An External File');
fs.writeFileSync('ouput.txt', 'This is a test file for Node.js');
console.log('File written successfully');
