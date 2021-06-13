const express = require("express");
var router = express.Router();

const login = require("../routes/login");
const register = require("../routes/register");
const google = require("../routes/google");

router.get("/", (req, res) => {
    res.render("index", {});
});

router.use("/login", login);
router.use("/register", register);
router.use("/google/auth", google);

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session = null;
        req.logout();
    }
       
    res.redirect("/");
    }
);

module.exports = router;