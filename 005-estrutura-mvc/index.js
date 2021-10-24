//importa os modulos necessarios
const express = require('express');
const exphbs = require('express-handlebars');

//monta a instancia do express dentro da variavel app
const app = express();

//chama modulo da conexao com banco
const conn = require('./db/conn');

//chama models
//const Ades = require('./models/Ades')

// configura a templete engine 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Seta o midleware para ler tudo que vem no corpo de uma requisao
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Definir a pasta public como statica para todo projeto
app.use(express.static('public'));




//Importar rotas
const adesRoutes = require('./routes/adesRoutes')
// setar rotas
app.use('/', adesRoutes);

//Escutar a porta 3000

conn.sync().then(() => {
    app.listen('3000', () => {
        console.log('Servidor Rodando!');
    })
}).catch((erro) => {
    console.log(erro)
})
