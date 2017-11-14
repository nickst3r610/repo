const fs = require('fs');

var lyrics1 = "What is love? \nBaby don't hurt me.\n"

var lyrics2 = "Don't hurt me.\nNo more.";

var lyrics3 = lyrics1 +
    lyrics2;
fs.writeFile("lyrics-1.txt", lyrics1, (err) => {
    if (err) {
        throw err
    }
    console.log('The file was saved.')

})

fs.writeFile("lyrics-2.txt", lyrics2, (err) => {
    if (err) {
        throw err
    }
    console.log('The file was saved.')

})

fs.readFile('lyrics-1.txt', 'utf-8', function (err, data) {
    if (err) {
        throw err
    }
})
fs.readFile('lyrics-2.txt', 'utf-8', function (err, data) {
    if (err) {
        throw err
    }
})

fs.writeFile("lyrics-3.txt", lyrics3, (err) => {
    if (err) {
        throw err
    }
    console.log('The file was saved successfully')
})

fs.readFile('lyrics-3.txt', 'utf-8', function (err, data) {
    if (err) {
        throw err
    }
    console.log(data)

})