const express = require("express");
const awsci = require("amazon-cognito-identity-js");
const config = require("../config/keys");
var router = express.Router();

router.get("/", (req, res) => {
    res.send("hi");
});

module.exports = router;