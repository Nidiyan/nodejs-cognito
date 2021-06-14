# Node.js, AWS Cognito, and more...

Using AWS Cognito for User Sign-up/Sign-in

#### Setup
1. AWS Cognito User Pool
2. Setup [ Google OAuth Credentials ](https://developers.google.com/identity/protocols/oauth2)

#### Packages
 - Express.js
 - CORS
 - passport
 - passport-google-oauth-20
 - body-parser
 - cookie-session
 - amazon-cognito-identity-js


#### keys.js
```
module.exports = {
    poolData: {
        UserPoolId: "...",
        ClientId: "...",
    },
    isLoggedIn: (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.sendStatus(401);
        }
    },
};
```