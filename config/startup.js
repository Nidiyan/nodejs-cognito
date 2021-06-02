const express = require("express");
var router = express.Router();

var login = require("../routes/login");
var register = require("../routes/register");
var signup = require("../routes/signup");

router.get("/", (req, res) => {
    res.render("index", {});
});

router.use("/login", login);
router.use("/register", register);

module.exports = router;