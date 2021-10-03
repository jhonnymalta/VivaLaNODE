// importar as configurações do servidor
const app = require('./config/Server');


//Parametriza qual porta nossa aplicação vai escutar]
app.listen('3000', function () {
    console.log('Servidor On-line')
})