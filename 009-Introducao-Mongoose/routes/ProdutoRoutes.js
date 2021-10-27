const express = require('express');
const router = express.Router();

const ProdutoController = require('../controllers/ProdutoController')

router.get('/', ProdutoController.todosProdutos);
router.get('/novoproduto', ProdutoController.novoProduto)
router.post('/novoproduto', ProdutoController.novoProdutoPost);


module.exports = router