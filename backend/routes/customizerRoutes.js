const express = require('express');
const router = express.Router();
const { getCustomizerData, postCustomizerData } = require('../controllers/customizerController');
const authMiddleware = require('../middlewares/authMiddleware.js')
router.get('/customizer', authMiddleware, getCustomizerData);
router.post('/customizer', authMiddleware, postCustomizerData);

module.exports = router;
