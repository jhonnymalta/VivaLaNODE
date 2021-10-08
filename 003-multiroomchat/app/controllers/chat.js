const { body, assert } = require("express-validator");


module.exports.iniciachat = function (application, req, res) {

    var dadosForm = req.body;
    //console.log(dadosForm);
    application.get('io').emit('msgParaCliente', { user: dadosForm.user, mensagem: 'Acabou de entrar no chat!' });
    res.render('chat');



}