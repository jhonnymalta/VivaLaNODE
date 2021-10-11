const express = require('express');
const router = express.Router();



//Rotas para usuarios
router.get("/", (req, res) => {
    res.render('novousuario');
})
router.post('/', (req, res) => {
    console.log("chegou aqui")
    console.log(req.body)
})



module.exports = router;