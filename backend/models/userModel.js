const mongoose = require("mongoose");

//schema
const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: [true, "email is required"],
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		resetToken: { type: String },
		resetTokenExpiration: { type: Date },
		address: {
			type: Array,
		},
		city: {
			type: String,
		},
		state: {
			type: String,
		},
		country: {
			type: String,
		},
		phone: {
			type: String,
			required: false,
		},

		// usertype: {
		// 	type: String,
		// 	required: [true, "user type is required"],
		// 	default: "clinet",
		// 	enum: ["clinet", "admin", "vendor", "driver"],
		// },
		profile: {
			// type: String,
			// default:
			// 	"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
			data: Buffer,
			contentType: String,
		},

	},
	{ timestamps: true }
);

//export
module.exports = mongoose.model("User", userSchema);