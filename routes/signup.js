const express = require("express");
var router = express.Router();

module.exports = (req, res) => {
    res.status(200).json({hello: "hi"});
};