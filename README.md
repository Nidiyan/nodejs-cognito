# Topic Talk

Using AWS Cognito for User Sign-up/Sign-in

##### Setup
1. AWS Cognito User Pool
2. Setup [a link](https://developers.google.com/identity/protocols/oauth2) Google OAuth Credentials

##### Packages
 - Express.js
 - CORS
 - passport
 - passport-google-oauth-20
 - body-parser
 - cookie-session
 - amazon-cognito-identity-js


##### keys.js
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