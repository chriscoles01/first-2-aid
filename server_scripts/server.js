const express = require('express')
const http = require('http')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')
const socketio = require('socket.io')
const { Strategy: TwitterStrategy } = require('passport-twitter')
var Twit = require('twit')

// Private api keys that you will get when registering an app on 
// apps.twitter.com
const TWITTER_CONFIG = {
  consumerKey: 'Q4sZ0b7kjLhVW7zLo8dGNSsFw',
  consumerSecret: 'bzgCJ2a2zMQYZ9OzB3ueLuPDvliUSu4S5fMBGbEBwzkexoB10n',
  // make sure the call back url matches what was set on Twitter
  // when registering the app
  callbackURL: 'http://127.0.0.1:8080/twitter/callback'
}
var T = new Twit({
  consumer_key:         'Q4sZ0b7kjLhVW7zLo8dGNSsFw',
  consumer_secret:      'bzgCJ2a2zMQYZ9OzB3ueLuPDvliUSu4S5fMBGbEBwzkexoB10n',
  access_token:         '2875036372-rEBuUQbpuV0edFfAMxYoI8J6hwXrraOT4SSyIjR',
  access_token_secret:  'bEV75aRZaKbYqmJYxs7svx4cSWRg4r4gzj2fzpa5n8W40',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})
// Create the server and allow express and sockets to run on the same hyport
const app = express()
const server = http.createServer(app)
const io = socketio(server)

// Allows the application to accept JSON and use passport
app.use(express.json())
app.use(passport.initialize())

// Set up cors to allow us to accept requests from our client
app.use(cors({
  origin: 'http://localhost:3000'
})) 

// saveUninitialized: true allows us to attach the socket id
// to the session before we have authenticated with Twitter  
app.use(session({ 
  secret: 'KeyboardKittens', 
  resave: true, 
  saveUninitialized: true 
}))

// allows us to save the user into the session
passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))

// Basic setup with passport and Twitter
passport.use(new TwitterStrategy(
  TWITTER_CONFIG, 
  (accessToken, refreshToken, profile, cb) => {
    
    // save the user right here to a database if you want
    const user = { 
        name: profile.username,
        photo: profile.photos[0].value.replace(/_normal/, '')
    }
    cb(null, user)
  })
)

// Middleware that triggers the PassportJs authentication process
const twitterAuth = passport.authenticate('twitter')

// This custom middleware picks off the socket id (that was put on req.query)
// and stores it in the session so we can send back the right info to the 
// right socket
const addSocketIdToSession = (req, res, next) => {
  req.session.socketId = req.query.socketId
  next()
}


// This is endpoint triggered by the popup on the client which starts the whole
// authentication process
app.get('/twitter', addSocketIdToSession, twitterAuth)

app.post('/twitter/reply', (req, res) => {
  
  

  string_status = ' certified first responder coming  @' + req.body.username
  T.post('statuses/update', {status: string_status, in_reply_to_status_id: req.body.id,  }, function(err, data, response) {
    console.log(data)
  })
 return res.status(201).send({
   success: 'true',
   message: 'reply done',
   
 })
});
// This is the endpoint that Twitter sends the user information to. 
// The twitterAuth middleware attaches the user to req.user and then
// the user info is sent to the client via the socket id that is in the 
// session. 
app.get('/twitter/callback', twitterAuth, (req, res) => {
  
  io.in(req.session.socketId).emit('user', req.user)
  res.end()
})


server.listen(8080, () => {
  console.log('listening...')
})

