const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

//http logger
app.use(morgan('combined'))

//Template engine
app.set('views', path.join(__dirname, 'resources/views'));
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));



const port = 3000


app.get('/', (req, res) => {
  console.log(req.query.keyword);
  res.render('home');
})

app.post('/', (req, res) => {
  res.render('home');
})

app.get('/new', (req, res) => {
  res.render('register');
})


app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  res.render('search');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})