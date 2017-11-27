const express = require('express') // import express
const morgan = require('morgan')
const app = express() // create an express server
const port = 8000; // we will use this later

const makeDeck = () => {
let suit = ["Diamonds", "Hearts", "Clovers", "Spades"];
let number = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];
let deck = []
for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < suit.length; j++) {
        deck.push(`${number[i]} of ${suit[j]}`)
    }
}
return deck;
};

const draw = (number) => {
    let deck = makeDeck()
    let hand = []
    for (var i = 0; i < number; i++) {
        let random = Math.floor(Math.random() * 52)
        if(hand.includes(deck[random])) {
        i = i - 1
        } else {
            hand.push(deck[random])
        }
    }
    return hand.join("<br>");
}

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('localhost:8000/draw/:number')
})

app.get('/draw/:number', (req, res) => {
    let number = req.params.number
    if(number > 10) {
        res.send('number have to be less than 10')
    } else {
        res.send(draw(number))
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





