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
    res.send('localhost:8000/:word/:cmd1/:cmd2')
})

app.get('/:word/:cmd1/:cmd2', (req, res) => {
    let word = req.params.word
    let cmd1 = req.params.cmd1
    let cmd2 = req.params.cmd2
    if (cmd1 === 'repeat') {
        let newWord = commands.repeat(word)
        if (cmd2 === 'repeat') {
            res.send(commands.repeat(newWord))
        }
        if (cmd2 === 'exclaim') {
            res.send(commands.exclaim(newWord))
        }
        if (cmd2 === 'reverse') {
            res.send(commands.reverse(newWord))
        }
    }
    if (cmd1 === 'exclaim') {
        let newWord = commands.exclaim(word)
        if (cmd2 === 'repeat') {
            res.send(commands.repeat(newWord))
        }
        if (cmd2 === 'exclaim') {
            res.send(commands.exclaim(newWord))
        }
        if (cmd2 === 'reverse') {
            res.send(commands.reverse(newWord))
        }
    }
    if (cmd1 === 'reverse') {
        let newWord = commands.reverse(word)
        if (cmd2 === 'repeat') {
            res.send(commands.repeat(newWord))
        }
        if (cmd2 === 'exclaim') {
            res.send(commands.exclaim(newWord))
        }
        if (cmd2 === 'reverse') {
            res.send(commands.reverse(newWord))
        }
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})