const express = require("express");

const multer = require('multer');
const imageController = require('../controllers/imageController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.post('/save', upload.single('editedImage'), authMiddleware, imageController.saveImage); // Assuming saveImage is the callback function for saving images
router.get('/getAll', authMiddleware, imageController.getAllImages); // Assuming getAllImages is the callback function for getting all images

module.exports = router;
