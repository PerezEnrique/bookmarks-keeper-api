const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema(
	{
		name: { type: String, required: true, maxlength: 50 },
		url: { type: String, required: true, minlength: 4 },
		title: String,
		description: { type: String, maxlength: 255 },
		imageUrl: { type: String },
		tags: [{ type: String, maxlength: 50 }],
	},
	{ timestamps: true }
);

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = { bookmarkSchema, Bookmark };
