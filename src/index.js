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

const port = 3000


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/new', (req, res) => {
  res.render('register');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})