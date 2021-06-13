const express = require("express");
const awsci = require("amazon-cognito-identity-js");
const config = require("../config/keys");
const passport = require("passport");
var router = express.Router();

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback', 
  passport.authenticate('google', { failureRedirect: '/google/auth/failure' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/google/auth/success');
  }
);

router.get("/failure", (req, res) => {
    res.send("You have failed to login via google");
});

router.get("/success", config.isLoggedIn, (req, res) => {
    res.send("You have successfully logged in");
});

module.exports = router;