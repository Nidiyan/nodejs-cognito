const express = require("express");
var router = express.Router();

var login = require("../routes/login");
var register = require("../routes/register");
var signup = require("../routes/signup");

router.get("/", (req, res) => {
    res.redirect("/login");
});

router.get("/login", login);
router.get("/register", register);
router.post("/signup", signup);

module.exports = router;