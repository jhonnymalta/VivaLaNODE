const express = require('express');
const router = express.Router();

const AdeController = require('../controllers/AdeController');

router.get('/ade', AdeController.showAde)

module.exports = router