const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const router = require('./routes')

//http logger
app.use(morgan('combined'))

//Template engine
app.set('views', path.join(__dirname, 'resources/views'));
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));



const port = 3000

//Router Init
router(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})