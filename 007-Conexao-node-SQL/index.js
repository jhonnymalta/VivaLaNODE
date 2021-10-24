//Aqui vamos importar os modulos que baixamos pelo npm
const express = require('express');
const exphbs = require('express-handlebars');
const sql = require('mssql');


// Vamos executar o express atraves da constante app
const app = express()

//vamos configurar o handlebars como template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// vamos setar a pasta public como static
app.use(express.static('public'));



//vamos criar uma variavel de conexao
const sqlConfig = {
    host: '172.17.28.5',
    user: 'ktauserdb_iccprd',
    password: '$toqu3*0518#Kta',
    database: 'ICC',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}
//Aqui criamos uma rota basica
app.get('/', (req, res) => {
    res.render('home')
    async () => {
        try {
            await sql.connect(sqlConfig);
            console.log('Conectou ao banco de dados SQL')
            const result = await sql.query`select top 1 * from TB_Propostas`
            console.log(result)
        } catch (err) {
            console.log(err)
        }

    }

})




app.listen('3000', () => {
    console.log('Servidor Subiu')
})