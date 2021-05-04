const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const commentSchema = new mongoose.Schema({
  id: String,
  text: String,
  postedBy: { type: ObjectId, ref: "User" },
});

module.exports = mongoose.model("Comment", commentSchema);
