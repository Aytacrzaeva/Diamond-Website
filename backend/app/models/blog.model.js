const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  image: String,
  name: String,
  desc: String,
  date:String
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
