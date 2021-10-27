const ProdutoModel = require('../models/Produto');


module.exports = class ProdutoController {

    static todosProdutos(req, res) {
        res.render('home')
    }
    static novoProduto(req, res) {
        res.render('novoProduto')
    }
    static async novoProdutoPost(req, res) {
        const name = req.body.name
        const preco = req.body.preco
        const descricao = req.body.descricao
        const image = req.body.image

        const produto = new ProdutoModel({ name, preco, descricao, image })

        await produto.save()

        res.redirect('/')

    }
}