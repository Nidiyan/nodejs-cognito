const express = require("express");
var router = express.Router();

// GET /register
router.get("/", (req, res) => {
    res.render("register", {});
});

// POST /register
router.post("/", (req, res) => {
    const awsci = require("amazon-cognito-idenity-js");
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    

    if (password !== confirmPassword)
    {
        res.redirect("/register?error=passwordsDoNotMatch");
    }

    const userPool = new awsci.CognitoUserPool(config.poolData);

    const emailData = {
        Name: 'email',
        Value: email
    };

    const emailAtrribute = new awsci.CognitoUserAttribute(emailData);
    
    userPool.signUp(email, password, [ emailAtrribute ], null, (err, data) => {
        if (err) {
            return console.error(err);
        }

        res.send(data.user);
    });
});

module.exports = router;