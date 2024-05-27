import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			trim: true, // Trim whitespace from input
		},
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minlength: 3, // Ensure a minimum length for username
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true, // Ensure email is always lowercase
			match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"], // Basic email validation
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
			trim: true,
		},
		gender: {
			type: String,
			required: true,
			enum: ["male", "female", "other"], // Updated enum to include more options
		},
		profilePic: {
			type: String,
			default: "", // Provide a default value for the profile picture URL
		},
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
