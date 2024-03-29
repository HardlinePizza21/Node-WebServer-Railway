require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Samuel Madrid',
    titulo: 'Curso de Node'
  });
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Samuel Madrid',
    titulo: 'Curso de Node'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Samuel Madrid',
    titulo: 'Curso de Node'
  
  })
})



app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
})