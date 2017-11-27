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

const draw = () => {
    let deck = makeDeck()
    let hand = []
    let value = 0
    for (var i = 0; i < 2; i++) {
        let random = Math.floor(Math.random() * 52)
        if(hand.includes(deck[random])) {
        i = i - 1
        } else {
            hand.push(deck[random])
        }
    }
    
    for (var i = 0; i < hand.length; i++) {
        if (hand[i].includes("Jack")) {
            value += 10
        } else if (hand[i].includes("Queen")) {
            value += 10
        } else if (hand[i].includes("King")) {
            value += 10
        }else if (hand[i].includes("Ace")) {
            value += 11
        } else if (hand[i].includes("10")) {
            value += 10
        } else {
            value += Number(hand[i][0])
        }
    }

    if (hand[0].includes("Ace") || hand[1].includes("Ace")) {
        return `${hand.join("<br>")} ${"<br>"} Value: ${value} or${"<br>"}  Value: ${value - 10}` 
    } else {
        return `${hand.join("<br>")} ${"<br>"} Value: ${value}`
    }
}

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('localhost:8000/deal/')
})

app.get('/deal/', (req, res) => {
    res.send(draw())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





