const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(new GoogleStrategy({
        clientID: "1067587575157-ij0avv913imolprtk43gvsnu47clgadl.apps.googleusercontent.com",
        clientSecret: "DGv_goozhrSoQXq8b5JnntFO",
        callbackURL: "http://localhost:8000/googleOAuth/callback"
    },
    function (accessToken, refreshToken, profile, done) {
        UserAgent.findOrCreate({ googleId: profile.id }, (err, user) => {
            return done(err, user);
        });
    }
));