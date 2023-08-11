const express = require('express');
const app = express();
const ejs = require('ejs');


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render("mainPage");
})
app.get('/oilPaintings', (req, res) => {
    res.render("oilPaintings");
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
