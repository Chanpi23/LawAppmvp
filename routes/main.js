const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const aboutController= require("../controllers/aboutus");
const companyController= require("../controllers/company");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
// router.get("/home", authController.getHome);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/aboutus",aboutController.getAboutus);
router.post("/aboutus",aboutController.postAboutus);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/company",companyController.getCompany);
router.post("/company",companyController.postCompany);




module.exports = router;
