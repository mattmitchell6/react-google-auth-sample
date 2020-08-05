const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport');
const app = express()
require('dotenv').config();

const strategy = require('./passport-google/passportStrategy.js');
const user = require('./routes/user')

// middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Routes
app.use('/user', user)

// Starting Server
app.listen(process.env.PORT || 8080, () => {
	console.log(`App listening on PORT: ${process.env.PORT || 8080}`)
})
