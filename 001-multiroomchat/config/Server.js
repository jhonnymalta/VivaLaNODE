// importa o módulo do framework express
const express = require('express');

// importa o módulo do consign
const consign = require('consign')

// importa o módudo do body-parser
const bodyParser = require('body-parser')

// importa o módulo do express-validator
const expressValidator = require('express-validator')

// inicia o objeto express
const app = express();


// Vamos setar o ejs como view engine 
app.set('view engine', 'ejs');
// vamos setar a view do express
app.set('views', './src/views');

//Configuração dos middlewares
app.use(express.static('./src/public'));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(expressValidator());

// Efetua o autoload das rotas models e controles para o objeto app
consign().include('src/routes').then('src/models').then('src/controllers').into(app);


// exporta o objeto app
module.exports = app;