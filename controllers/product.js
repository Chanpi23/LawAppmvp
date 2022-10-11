const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  getProduct: async (req, res) => {
    try {
   
      res.render("product.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  postProduct: async (req, res) => {
    try {
     
      res.render("product.ejs");
    } catch (err) {
      console.log(err);
    }
  }
};