const express = require('express')
const app = express()
const port = 3000;

const movies = require('./movies')

const moviesByTitle = (title) =>
  movies.filter(movie => movie.title === title)

const moviesByGenre = (genre) =>
  movies.filter(movie => {
    if (!movie.genre) {
      return false
    } else {
      const genreArr = movie.genre.split(', ');
      return genreArr.includes(genre)
    }
  })

const moviesByTitleAndDirector = (title, director) =>
  movies.filter(movie => 
      movie.title === title && 
      movie.director === director)

app.get('/genre/:genre', (req, res) => {
  const genre = req.params.genre;
  res.send(moviesByGenre(genre))
})


app.get('/title/:title', (req, res) => {
  const title = req.params.title;
  res.send(moviesByTitle(title))
})


app.get('/title/:title/director/:director', (req, res) => {
    console.log(req.params)
    const title = req.params.title;
    const director = req.params.director;
    res.send(moviesByTitleAndDirector(title, director))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})
