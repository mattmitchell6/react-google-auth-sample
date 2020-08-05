const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
  if(req.user) {
    res.json({
      authenticated: true,
      user: req.user
    })
  } else {
    res.json({
      authenticated: false,
      user: null
    })
  }
})

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
  // could also fetch token from google auth
  // const token = req.user.token;
  // res.redirect("http://localhost:3000?token=" + token);
  res.redirect(process.env.CLIENT_URL)
});

router.get('/logout', function(req, res) {
  req.logout();
  res.sendStatus(200)
});

module.exports = router;
