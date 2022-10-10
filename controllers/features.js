const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

module.exports = {
  getFeatures: async (req, res) => {
    try {
   
      res.render("features.ejs");
    } catch (err) {
      console.log(err);
    }
  },
  postFeatures: async (req, res) => {
    try {
     
      res.render("features.ejs");
    } catch (err) {
      console.log(err);
    }
  }
};