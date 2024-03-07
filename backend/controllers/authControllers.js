const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const sendEmail = require('../utils/sendEmails');
const secretKey = process.env.JWT_SECRET || '12345';

const generateToken = (userId) => {
	return JWT.sign({ userId }, secretKey, { expiresIn: '1h' })
}

// REGISTER
const registerController = async (req, res) => {
	try {
		const { name, email, password, confirmPassword } = req.body;
		//validation
		if (!email || !password || !name || !confirmPassword) {
			return res.status(500).send({
				success: false,
				message: "Please Provide All Fields",
			});
		}
		if (password !== confirmPassword) {
			return res.status(400).json({ success: false, message: 'Passwords do not match' });
		}
		// chekc user
		const exisiting = await userModel.findOne({ email });
		if (exisiting) {
			return res.status(500).send({
				success: false,
				message: "Email Already Registerd please Login",
			});
		}
		//hashing password
		var salt = bcrypt.genSaltSync(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		//create new user
		const user = await userModel.create({
			email,
			password: hashedPassword,

		});


		res.status(201).send({
			success: true,
			message: "Successfully Registered",
			user,

		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Error In Register API",
			error,
		});
	}
};

// LOGIN
const loginController = async (req, res) => {
	try {
		const { email, password } = req.body;
		//validfatuion
		if (!email || !password) {
			return res.status(500).send({
				success: false,
				message: "Please PRovide EMail OR Password",
			});
		}
		//check user
		const user = await userModel.findOne({ email });
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "User Not Found",
			});
		}
		//check user password  | compare password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(500).send({
				success: false,
				message: "Invalid Credentials",
			});
		}
		// token
		// const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
		// 	expiresIn: "7h",
		// });
		const token = generateToken(user._id)

		user.password = undefined;
		res.status(200).send({
			success: true,
			message: "Login Successfully",
			token,
			user,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Error In Login API",
			error,
		});
	}
};

const resetPasswordRequest = async (req, res) => {
	try {
		const { email } = req.body;
		const user = await userModel.findOne({ email });
		if (!user) {
			return res.status(404).json({ success: false, message: 'User not found' });
		}

		const resetToken = JWT.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
		user.resetToken = resetToken;
		user.resetTokenExpiration = Date.now() + 3600000;
		await user.save();

		const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
		const emailText = `Click on the link to reset your password: ${resetLink}`;

		await sendEmail(user.email, 'Password Reset Request', emailText);

		res.status(200).json({ success: true, message: 'Password reset email sent successfully' });

	} catch (error) {
		console.error('Error in resetPasswordRequest:', error);
		res.status(500).json({ success: false, message: 'Internal Server Error' });
	}
}

const resetPassword = async (req, res) => {
	try {
		const { resetToken, newPassword, confirmNewPassword } = req.body;

		const user = await userModel.findOne({
			resetToken,
			resetTokenExpiration: { $gt: Date.now() }, // Check if token is still valid
		});

		if (!user) {
			return res.status(401).json({ success: false, message: 'Invalid or expired reset token' });
		}

		if (newPassword !== confirmNewPassword) {
			return res.status(400).json({ success: false, message: 'Passwords do not match' });
		}

		const hashedPassword = await bcrypt.hash(newPassword, 10);
		user.password = hashedPassword;
		user.resetToken = undefined;
		user.resetTokenExpiration = undefined;
		await user.save();

		res.status(200).json({ success: true, message: 'Password reset successful' });
	} catch (error) {
		console.error('Error in resetPassword:', error);
		res.status(500).json({ success: false, message: 'Internal Server Error' });
	}
};

const updatePassword = async (req, res) => {
	try {
		const { userId, currentPassword, newPassword, confirmNewPassword } = req.body;

		const user = await userModel.findById(userId);

		if (!user) {
			return res.status(404).json({ success: false, message: 'User not found' });
		}

		const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({ success: false, message: 'Current password is incorrect' });
		}

		if (newPassword !== confirmNewPassword) {
			return res.status(400).json({ success: false, message: 'Passwords do not match' });
		}

		const hashedPassword = await bcrypt.hash(newPassword, 10);
		user.password = hashedPassword;
		await user.save();

		res.status(200).json({ success: true, message: 'Password updated successfully' });
	} catch (error) {
		console.error('Error in updatePassword:', error);
		res.status(500).json({ success: false, message: 'Internal Server Error' });
	}
};
module.exports = { registerController, loginController, resetPasswordRequest, resetPassword, updatePassword };