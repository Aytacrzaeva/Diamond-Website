const Blog = require("../models/blog.model");
const blogController = {
  getAll: async (req, res) => {
    const blogs = await Blog.find();
    res.send(blogs);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const target = await Blog.findById(id);
    res.send(target);
  },

  add: async (req, res) => {
    let product = new Blog({
      image: req.file.filename,
      name: req.body.name,
      desc: req.body.desc,
      date:req.body.date
    });
    await product.save();
    res.send("item created");
    product.save();
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Blog.findByIdAndDelete(id);
    res.send(deletedProduct);
  },
  edit: async (req, res) => {
    const { id } = req.params;
    // const { filename } = req.file;
    const {  name,desc,date } = req.body;
    const updateListing = await Blog.findByIdAndUpdate(
      id,
      { image: req.body.imageSrc, name,desc,date },
      { new: true }
    );
    res.send(`${id}'li element has been updated`);
  },
};
module.exports = { blogController };
