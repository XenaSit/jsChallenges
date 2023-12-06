console.log("==========================================Colabora📺 ")

// Node.js, fs stands for "File System," and it's a built-in module that allows interaction with the file system on your computer.
const fs = require('fs'); 


function repeats2(array) {
    return array.map(word => {
        if (typeof word !== 'string') {
            return []; // Return an empty array for non-string elements
        }
        let uniqueChars = [...new Set(word.toString())];
        return word.split('').filter(char => uniqueChars.includes(char));
    });
}

fs.readFile('./05-week-js-sandbox-02-file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    const wordsList = data.split('\n').map(word => word.trim());
    const result = repeats2(wordsList);
    console.log(result);
});


console.log("==========================================")