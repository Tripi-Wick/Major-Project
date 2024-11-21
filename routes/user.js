const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl}= require("../utils/middleware.js");

const userController = require("../controllers/users.js");

// Signup Form 
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));


// Login Route
router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), userController.login);

// Logout Route
router.get("/logout", userController.logout);


module.exports = router;