const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
        done(null, user);
    }
);

passport.deserializeUser((user, done) => {
        done(null, user);
    }
);

passport.use(new GoogleStrategy({
        clientID: "1067587575157-ij0avv913imolprtk43gvsnu47clgadl.apps.googleusercontent.com",
        clientSecret: "DGv_goozhrSoQXq8b5JnntFO",
        callbackURL: "http://localhost:8000/google/auth/callback"
    },
    // Modify this to get AWS Creds
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile.id);
    })
);