const Ademodel = require('../models/AdeModels');

module.exports = class AdeController {
    static async showAde(req, res) {
        res.render('ade/home')
    }
}