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

const router = express.Router();

//routes
//POST USER DETAILS||POST
router.post('/addprofiledetails', authMiddleware, addProfileDetails)

//GET USER DETAILS || GET
router.get('/getprofiledetails', authMiddleware, getUserProfileController);  //accessible to

// GET USER || GET
router.get("/getuser", authMiddleware, getUserController);

// UPDATE PROFILE
router.put("/updateuser", authMiddleware, updateUserController);

//password update
router.post("/updatepassword", authMiddleware, updatePasswordController);

// RESET PASSWORD
router.post("/resetpassword", authMiddleware, resetPasswordController);

// delete USER
router.delete("/deleteuser/:id", authMiddleware, deleteProfileController);

module.exports = router;