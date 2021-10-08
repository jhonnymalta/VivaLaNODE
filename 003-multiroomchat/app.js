// importar as configurações do servidor 
const app = require('./config/server');
const { Server } = require("socket.io");






// parametrizar a porta de escuta
//precisamos passar o app.listen para um variável
//quando vamos trabalhar com socket.io
var server = app.listen(80, () => {
    console.log('Servidor On-line');
})


// o socket.io vai escutar a mesma porta que o server
//var io = require('socket.io').listen(server);
const io = new Server(server);
//setando um variavel como global para ser acessada na view
app.set('io', io)

io.on('connection', (socket) => {
    console.log('Usuário conectado!');


    socket.on('disconnect', function () {
        console.log("Usuário desconectou!");
    })
});




