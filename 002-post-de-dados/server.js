const express = require('express');
const app = express();


//importar module de rotas
const userRouter = require('./src/routes/user');

//configurar engine de template
app.set('view engine', 'ejs');
app.set('views', './src/views');


//configurar middleware para ler corpo da requisicao
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// configur rotas para serem usadas atraves de um módulo de rotas
app.use('/user', userRouter);


//rota principal
app.get('/', (req, res) => {
    res.send("Pagina Home");
})


// Servidor fica escutando a partir da porta :3000
app.listen('3000', () => {
    console.log("Servidor rodando na porta :3000");
})