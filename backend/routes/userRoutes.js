const express = require("express");
const {
	addProfileDetails,
	getUserProfileController,
	getUserController,
	updateUserController,
	updatePasswordController,
	resetPasswordController,
	deleteProfileController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const multer = require('multer');
const router = express.Router();
// Multer configuration for file upload
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '');
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString() + '-' + file.originalname);
	}
});

const upload = multer({ storage: storage });

//routes
//POST USER DETAILS||POST
router.post('/addprofiledetails', upload.single('profileImage'), addProfileDetails)

//GET USER DETAILS || GET
router.get('/getprofilelist', getUserProfileController);  //accessible to

// GET USER || GET
router.get("/getuser/:id", getUserController);

// UPDATE PROFILE
router.put("/updateuser", updateUserController);

//password update
router.post("/updatepassword", updatePasswordController);

// RESET PASSWORD
router.post("/resetpassword", resetPasswordController);

// delete USER
router.delete("/deleteuser/:id", deleteProfileController);

module.exports = router;