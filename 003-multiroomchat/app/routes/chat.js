const { application } = require("express");

module.exports = function (application) {
    application.post('/chat', (req, res) => {
        application.app.controllers.chat.iniciachat(application, req, res);

    });
    application.get('/chat', (req, res) => {

        application.app.controllers.chat.iniciachat(application, req, res);

    });
}