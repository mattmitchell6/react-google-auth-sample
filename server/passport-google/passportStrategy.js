const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// const User = require('../../models/users');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.API_URL}/user/auth/google/callback`,
  passReqToCallback: true
},
function(request, accessToken, refreshToken, profile, done) {
  // we eventually might want to save the user here
  // User.findOrCreate({googleId: profile.id, name: profile.displayName}, function (err, user) {
  //   return done(err, user);
  // });
  const user = {
    googleId: profile.id,
    name: profile.displayName
  }
  done(null, user)
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
