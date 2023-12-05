const fs = require('fs');

// Read the file synchronously
const words = fs.readFileSync('05-week-js-sandbox-02-file.txt', 'utf8').split('\n').filter(Boolean); 
// Read, split by lines, and remove empty lines

module.exports = words;