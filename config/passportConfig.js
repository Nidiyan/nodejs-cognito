const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const config = require("./keys");

passport.serializeUser((user, done) => {
        done(null, user);
    }
);

passport.deserializeUser((user, done) => {
        done(null, user);
    }
);

passport.use(new GoogleStrategy(config.googleCredentials,
    // Modify this to get AWS Creds
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    })
);