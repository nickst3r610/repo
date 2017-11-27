const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()


app.use(logger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello there')
})

const fs = require('fs')

app.post('/moods', function (req, res) {
    console.log(req.body)
    const nameAndMood = req.body.name + ' ' + req.body.mood;
    fs.appendFile('moods.txt', nameAndMood + '\n', (err) => {
      if (err) throw err;
      console.log('appended to file');
      res.send('success')
    });
  })

const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})