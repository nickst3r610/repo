const express = require('express')
const app = express()
const port = 4000;

const laureates = require('./laureates')

const laureatesByFirstName = (firstName) => {
    let names = []
    laureates.filter(laureate => {
        names.push(laureate.firstName)
    })
    return names
}


const laureatesBylastName = (lastName) => {
    let names = []
    laureates.filter(laureate => {
        names.push(laureate.lastName)
    })
    return names
}


app.get('/firstname/:firstName', (req, res) => {
    const firstName = req.params.firstName;
    res.send(laureatesByFirstName(firstName))
})

app.get('/lastname/:lastName', (req, res) => {
    const lastName = req.params.lastName;
    res.send(laureatesBylastName(lastName))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})
