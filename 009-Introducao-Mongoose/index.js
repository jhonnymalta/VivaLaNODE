const express = require('express');
const exphbs = require('express-handlebars')

const conn = require('./db/conn')
const ProdutoController = require('./controllers/ProdutoController')

const ProdutoRoutes = require('./routes/ProdutoRoutes')



const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set(express.static('public'))


app.get('/', (req, res) => {
    res.render('home')
})
app.use('/produtos', ProdutoRoutes);


app.listen('3000', () => {
    console.log('Api Rodando!')
})