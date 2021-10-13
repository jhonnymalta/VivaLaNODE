const Ades = require('../models/Ades');


module.exports = class AdesController {
    static async pesquisar(req, res) {
        const Adesretorno = await Ades.query('select top 1 * from TB_Propostas')

        res.render('ades/pesquisa', { Adesretorno })
    }
}