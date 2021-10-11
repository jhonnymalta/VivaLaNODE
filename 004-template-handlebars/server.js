// Importe dos modulos necessarios para o projeto
const express = require('express');
const exphbs = require("express-handlebars");

// inicializa a constante app com  o express
const app = express();

//configura a template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// setar a pasta view statica para todas as views
app.set('views', './src/views');

// rota inicial
app.get('/', (req, res) => {
    res.render('home', { layout: false })
})

app.listen('3000', () => {
    console.log('App Rodando na porta:3000!')
})