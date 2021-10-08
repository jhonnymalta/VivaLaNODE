// importar o módulo do express framework
const express = require('express');

//importar o módulo do consign
const consign = require('consign');

//importar o modulo do body-parser;
const bodyParser = require('body-parser');

//importar modulo do express-validator;
const { body, validationResult } = require('express-validator');


/////////////////////////////
// iniciar o objeto express//
/////////////////////////////
const app = express();


//setar as variaveis  view engine e views
app.set('view engine', 'ejs');
app.set('views', './app/views');


//configura o middleware express.static
app.use(express.static('./app/public'));

//configura o body-parser para receber dados dos formularios
app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json())

//configurar o middleware express-validator
//app.set('expressVal');

// efetua o autoload das rotas, dos models e dos controllers para o objeto app
consign().include('app/routes').then('app/models').then('app/controllers').into(app);

// aqui exportamos o objeto app
module.exports = app;



