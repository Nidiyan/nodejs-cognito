const express = require("express");
const awsci = require("amazon-cognito-identity-js");
const config = require("../config/keys");
const passport = require("passport");
var router = express.Router();

router.get('/login', passport.authenticate('google', 
    { 
        scope: ['profile', 'email'],
        prompt: "select_account"
    })
);

router.get('/callback', 
  passport.authenticate('google', { failureRedirect: '/google/auth/failure' }),
  (req, res) => {
    // Successful authentication, redirect home.
    req.session.user = req.user;
    res.redirect('/google/auth/success');
  }
);

router.get("/success", config.isLoggedIn, (req, res) => {
    res.send(`You have successfully logged in ${req.user.email}`);
});

router.get("/failure", (req, res) => {
    res.send("You have failed to login via google");
});

module.exports = router;