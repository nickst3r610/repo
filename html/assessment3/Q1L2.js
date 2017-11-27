const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 4000;


const commands = {
    repeat: function repeat(string) {
        return `${string}${string}`
    },
    exclaim: function exclaim(string) {
        return `${string}!`
    },
    reverse: function reverse(string) {
       return string.split("").reverse().join("")
    }
};

app.get('/', (req, res) => {
    res.send('localhost:8000/:command/:word')
})

app.get('/:command/:word/', (req, res) => {
    let command = req.params.command
    let word = req.params.word
    if (command.includes("repeat")) {
        res.send(commands.repeat(word))
    } else if (command.includes("exclaim")) {
        res.send(commands.exclaim(word))
    } else if (command.includes("reverse")) {
        res.send(commands.reverse(word))
    } else {
        res.send('[command name] is not a valid command.')
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})