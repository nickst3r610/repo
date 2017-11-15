const chalk = require('chalk');

//Exercise 1//
let helloBlue = (string) => {
    console.log(chalk.blue(string));
};

//Exercise 2//
let helloRed = (string) => {
    console.log(chalk.red(string));
};

//Exercise 3//
let stringToColor = (string, color) => {
    console.log(chalk[color](string));
};

//Exercise 4//
let evensBlueOddsYellow = (string) => {
    let arr = string.split(" ")
    let newArr = []
    
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(chalk.yellow(arr[i]))
        } else {
            newArr.push(chalk.blue(arr[i]))
        }
    }
    let newString = newArr.join(" ")
    console.log(newString)
}

//Exercise 5
let angryText = (string) => {
    console.log(chalk.red.underline.bold(string.toUpperCase()))
}

//Exercise 6
let backgroundCyan = (string) => {
    console.log(chalk.white.bgCyan(string))
}

//Exercise 7
let boldFirstUnderlineLast = (string) => {
    let arr = string.split(" ")
    let newArr = []

    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            newArr.push(chalk.bold(arr[0]))
        } else if (i === (arr.length-1)) {
            newArr.push(chalk.underline(arr[arr.length-1]))
        } else {
            newArr.push(arr[i])
        } 
    }
    console.log(newArr.join(" "))
}
