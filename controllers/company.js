const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  getCompany: async (req, res) => {
    try {
   
      res.render("aboutus.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  postCompany: async (req, res) => {
    try {
     
      res.render("aboutus.ejs");
    } catch (err) {
      console.log(err);
    }
  }
};