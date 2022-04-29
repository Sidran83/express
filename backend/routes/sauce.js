const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce');

router.post('/signup', auth, sauceCtrl.getAllSauces);

module.exports = router;
