const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const addProfileDetails = async (req, res) => {
	try {
		const { userId, city, state, country, address } = req.body;
		let profileImage = '';
		if (req.file) {
			profileImage = req.file.path
		}
		const user = await userModel.findById(userId);

		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}
		user.city = city;
		user.state = state;
		user.country = country;
		user.address = address;
		user.profileImage = profileImage;
		await user.save();
		res.status(200).json({ success: true, message: "Profile details updated successfully", user });
	} catch (error) {
		console.error("Error in addProfileDetails:", error);
		res.status(500).json({ success: false, message: "Internal server error", error });
	}
};
//  GET USER PROFILE
const getUserProfileController = async (req, res) => {
	try {
        // Find all users
        const userList = await userModel.find();

        // Check if any users exist
        if (!userList || userList.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No users found",
            });
        }

        // Hide sensitive information
        userList.forEach(user => {
            user.password = undefined;
        });

        // Respond with the list of users
        res.status(200).json({
            success: true,
            message: "User list retrieved successfully",
            users: userList,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Error retrieving user list",
            error: error,
        });
    }
	
};
// GET USER INF
const getUserController = async (req, res) => {
	try {
		// Find user by ID
		const user = await userModel.findById(req.params.id);

		// Validation
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}

		// Hide sensitive information
		user.password = undefined;

		// Respond with user profile
		res.status(200).json({
			success: true,
			message: "User retrieved successfully",
			user,
		});
	} catch (error) {
		console.error("Error in getUserController:", error);
		res.status(500).json({
			success: false,
			message: "Error retrieving user",
			error,
		});
	}
};

// UPDATE USER
const updateUserController = async (req, res) => {
	try {
		// find user
		const user = await userModel.findById({ _id: req.body.id });
		//validation
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "user not found",
			});
		}
		//update
		const { userName, address, phone } = req.body;
		if (userName) user.userName = userName;
		if (address) user.address = address;
		if (phone) user.phone = phone;
		//save user
		await user.save();
		res.status(200).send({
			success: true,
			message: "USer Updated SUccessfully",
		});
	} catch (error) {
		// console.log(erorr);
		res.status(500).send({
			success: false,
			message: "Error In Udpate Userr API",
			error,
		});
	}
};

// UPDATE USER PASSWORR
const updatePasswordController = async (req, res) => {
	try {
		//find user
		const user = await userModel.findById({ _id: req.body.id });
		//valdiation
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "Usre Not Found",
			});
		}
		// get data from user
		const { oldPassword, newPassword } = req.body;
		if (!oldPassword || !newPassword) {
			return res.status(500).send({
				success: false,
				message: "Please Provide Old or New PasswOrd",
			});
		}
		//check user password  | compare password
		const isMatch = await bcrypt.compare(oldPassword, user.password);
		if (!isMatch) {
			return res.status(500).send({
				success: false,
				message: "Invalid old password",
			});
		}
		//hashing password
		var salt = bcrypt.genSaltSync(10);
		const hashedPassword = await bcrypt.hash(newPassword, salt);
		user.password = hashedPassword;
		await user.save();
		res.status(200).send({
			success: true,
			message: "Password Updated!",
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Error In Password Update API",
			error,
		});
	}
};

// RESET PASSWORd
const resetPasswordController = async (req, res) => {
	try {
		const { email, newPassword, answer } = req.body;
		if (!email || !newPassword || !answer) {
			return res.status(500).send({
				success: false,
				message: "Please Privide All Fields",
			});
		}
		const user = await userModel.findOne({ email, answer });
		if (!user) {
			return res.status(500).send({
				success: false,
				message: "User Not Found or invlaid answer",
			});
		}
		//hashing password
		var salt = bcrypt.genSaltSync(10);
		const hashedPassword = await bcrypt.hash(newPassword, salt);
		user.password = hashedPassword;
		await user.save();
		res.status(200).send({
			success: true,
			message: "Password Reset SUccessfully",
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "eror in PASSWORD RESET API",
			error,
		});
	}
};

// DLEETE PROFILE ACCOUNT
const deleteProfileController = async (req, res) => {
	try {
		await userModel.findByIdAndDelete(req.params.id);
		return res.status(200).send({
			success: true,
			message: "Your account has been deleted",
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Erorr In Delete Profile API",
			error,
		});
	}
};

module.exports = {
	addProfileDetails,
	getUserProfileController,
	getUserController,
	updateUserController,
	updatePasswordController,
	resetPasswordController,
	deleteProfileController,
};