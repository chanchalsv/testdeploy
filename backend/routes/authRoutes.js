const express = require("express");
const {
	registerController,
	loginController, resetPasswordRequest,
	resetPassword,
	updatePassword
} = require("../controllers/authControllers");

const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

router.post('/reset-password-request', resetPasswordRequest)

router.post('/reset-password', resetPassword)

router.put('/update-password', updatePassword)

module.exports = router;

