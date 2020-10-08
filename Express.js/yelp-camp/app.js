const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

//Set up DB
mongoose.connect('mongodb://localhost:27017/yelp_camp', {useNewUrlParser: true, useUnifiedTopology: true});

//Schema
const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

const Campground = mongoose.model('Campground', campgroundSchema);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('landing');
});

app.get('/campgrounds', (req, res) => {
  Campground.find((err, campgrounds) => {
    if (err) return console.error(err);
    res.render('campgrounds', {campgrounds: campgrounds});
  });
});

app.post('/campgrounds', (req, res) => {
  const name = req.body.name;
  const image = req.body.image;
  const newCampground = {name: name, image: image};
  Campground.create(newCampground, (err, campground) => {
    if (err) return console.error(err);
    res.redirect('/campgrounds');
  });
});

app.get('/campgrounds/new', (req, res) => {
  res.render('new');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});