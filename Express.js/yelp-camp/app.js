const express = require('express');

const app = express();
const port = 3000;

let campgrounds = [
  {name: 'Volcan Baru', image: 'https://images.pexels.com/photos/803226/pexels-photo-803226.jpeg?auto=compress&cs=tinysrgb&h=350'},
  {name: 'Venta de Cruces', image: 'https://images.pexels.com/photos/2108709/pexels-photo-2108709.jpeg?auto=compress&cs=tinysrgb&h=350'},
  {name: 'La Yeguada', image: 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350'},
];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});