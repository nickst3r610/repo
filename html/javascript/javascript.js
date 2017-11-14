//console.log(process.argv);
//console.log(`your first argument is ${process.argv[2]}`)
//console.log(`the output is ${Number(process.argv[2]) + Number(process.argv[3])} `);

const fs = require("fs");
fs.readFile('words.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});

fs.watch('words.txt', (eventType, filename) => {
    console.log(eventType + ' in ' + filename);
})