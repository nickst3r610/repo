const chalk = require('chalk');


let helloBlue = (string) => {
    console.log(chalk.blue(string));
};


let helloRed = (string) => {
    console.log(chalk.red(string));
};

let stringToColor = (string, color) => {
    let typeColor = color
    console.log(chalk[.typeColor](string));
};

stringToColor('hi','red')