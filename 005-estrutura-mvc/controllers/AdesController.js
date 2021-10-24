const Ades = require('../models/Ades');
const db = require('../db/conn')


module.exports = class AdesController {
    static async pesquisar(req, res) {
        const Adesretorno = await db.query('select top 1 * from TB_Propostas', function (err, result) {
            console.log(Adesretorno)
        })

        res.render('ades/pesquisa', { Adesretorno })
    }
}n