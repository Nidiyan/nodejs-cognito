const express = require("express");
var router = express.Router();

// GET /login
// Returns the login page
router.get("/", (req, res) => {
    res.render("login");
});

// POST /login
// logs the user in
router.post("/", (req, res) => {
    res.send("hi");
});

module.exports = router;