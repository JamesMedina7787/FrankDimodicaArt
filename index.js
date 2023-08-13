const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("mainPage");
})
app.get('/oilPaintings', (req, res) => {
  fs.readFile('pictures.json', function(error, data){
    if(error){
      res.status(500).end()
    } else {
      res.render('oilPaintings.ejs', {
       pictures: JSON.parse(data)
      })
    }
  })
})

app.get('/mixedMedia', (req, res) => {
  fs.readFile('mixed.json', function(error, data){
    if(error){
      res.status(500).end()
    } else {
      res.render('mixedMedia.ejs', {
       mixed: JSON.parse(data)
      })
    }
  })
})

app.get('/pencilDrawings', (req, res) => {
  fs.readFile('pencil.json', function(error, data){
    if(error){
      res.status(500).end()
    } else {
      res.render('pencilDrawings.ejs', {
       drawn: JSON.parse(data)
      })
    }
  })
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
