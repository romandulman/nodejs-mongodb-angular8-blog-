const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Title: String,
    Body: String,
    DateTime: String,
    User: String
});
const Posts = mongoose.model("posts", userSchema);

module.exports = Posts;
