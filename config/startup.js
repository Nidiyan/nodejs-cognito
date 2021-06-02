const express = require("express");
var login = require("../routes/login");
var router = express.Router();

router.get("/login", login);

module.exports = router;