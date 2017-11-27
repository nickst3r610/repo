const express = require('express')
const app = express()
const port = 4000;

const laureates = require('./laureates')


const laureateByPrize = (prize) => {
    laureates.filter(laureate => {
        if (!laureate.prize) {
            return false
        } else {
            const prizeArr = laureate.prize;
            return prizeArr.includes(prize)
        }
    })
}

app.get('/prize/:prize', (req, res) => {
    const prize = req.params.prize;
    res.send(laureateByPrize(prize))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})