const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  getAboutus: async (req, res) => {
    try {
   
      res.render("aboutus.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  postAboutus: async (req, res) => {
    try {
     
      res.render("aboutus.ejs");
    } catch (err) {
      console.log(err);
    }
  }
};
