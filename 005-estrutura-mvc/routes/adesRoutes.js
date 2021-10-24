const express = require('express');
const router = express.Router();

const AdesController = require('../controllers/AdesController');

router.get('/ades', AdesController.pesquisar);




module.exports = router