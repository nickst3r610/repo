const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8000; 

const repeat = (string) => {
    return `${string}${string}`
};
const exclaim = (string) => {
    return `${string}!`
};
const reverse = (string) => {
    return string.split("").reverse().join("")
};

app.get('/repeat/:word/', (req, res) => {
    let word = req.params.word
    res.send(repeat(word))
})

app.get('/exclaim/:word/', (req, res) => {
    let word = req.params.word
    res.send(exclaim(word))
})

app.get('/reverse/:word/', (req, res) => {
    let word = req.params.word
    res.send(reverse(word))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

