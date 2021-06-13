const express = require("express");
var router = express.Router();

// GET /login
// Returns the login page
router.get("/", (req, res) => {
    res.send("Page Under Construction");
});

// POST /login
// logs the user in
router.post("/", (req, res) => {
    res.json({status: "Endpoint not finished"});
});

module.exports = router;