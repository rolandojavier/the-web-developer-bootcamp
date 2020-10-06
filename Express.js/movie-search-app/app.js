const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/results', (req, res) => {
  const url = 'http://www.omdbapi.com/?apikey=thewdb&s=';
  const searchTerm = req.query.searchTerm;
  axios.get(url + searchTerm)
    .then((response) => {
      const movies = response.data['Search'];
      res.render('results', {movies: movies});
    })
    .catch((error) => {
      console.log(`Movie query error: ${error}`);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});