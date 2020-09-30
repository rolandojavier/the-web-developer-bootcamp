const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', (req, res) => {
  const animal = req.params.animal.toLowerCase();
  const sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof!'
  };
  if(sounds[animal]){
    res.send('The ' + animal + ' says "' + sounds[animal] + '"');
  } else {
    res.send('Sorry, page not found...');
  }
  
});

app.get('/repeat/:str/:num', (req, res) => {
  const str = req.params.str;
  const num = Math.floor(Number(req.params.num));
  if(num && str){
    let sentence = '';
    for(let i = 0; i < num; i++){
      sentence += str + ' ';
    }
    res.send(sentence);
  } else {
    res.send('Sorry, page not found...');
  }
});

app.get('*', (req, res) => {
  res.send('Sorry, page not found...');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});