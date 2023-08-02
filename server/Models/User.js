import mongoose from "mongoose"

const User = new mongoose.Schema({
	username: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	date: { type: Date, default: Date.now },
})

export default mongoose.model('User', User)