const chalk = require('chalk');
const figlet = require('figlet');

figlet('Meow', {
    font: 'Mirror',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.yellow.bgBlue.bold(data))
});