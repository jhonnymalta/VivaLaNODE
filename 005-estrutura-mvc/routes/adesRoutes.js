const express = require('express');
const router = express.Router();

const AdesController = require('../controllers/AdesController');

router.get('/', AdesController.pesquisar);




module.exports = router