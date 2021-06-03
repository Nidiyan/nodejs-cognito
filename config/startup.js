const express = require("express");
var router = express.Router();

var login = require("../routes/login");
var register = require("../routes/register");

router.get("/", (req, res) => {
    res.render("index", {});
});

router.use("/login", login);
router.use("/register", register);

module.exports = router;