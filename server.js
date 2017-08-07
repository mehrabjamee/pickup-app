var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')
// var admin = require('firebase-admin')

// var serviceAccount = require('./node-firebase-intro-4a50b-firebase-adminsdk-unu42-b5cd4e8f39.json')

// var firebaseAdmin = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://node-firebase-intro-4a50b.firebaseio.com'
// })

// var database = firebaseAdmin.database()

// Create instance of express app
var app = express()

// We want to serve js and html in ejs
// ejs stands for embedded javascript
app.set('view engine', 'ejs')

// We also want to send css, images, and other static files
app.use(express.static('views'))
app.set('views', __dirname + '/views')

// Give the server access to the user input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(logger('dev'))

app.get('/', function(request, response){
  response.render('home.ejs')
})

app.get('/dem-parks', function(request, response){
  response.render('dem-parks.ejs')
})

app.get('/parkPreferences', function(request, response){
  response.render('dem-parks.ejs')
})

app.get('/sportsPreferences', function(request, response){
  response.render('sportsPreferences.ejs')
})

app.get('/calendarPreferences', function(request, response){
  response.render('calendarPreferences.ejs')
})

app.get('/homepage', function(request, response){
  response.render('homepage.ejs')
})

app.get('/about', function(request, response){
  response.render('aboutus.ejs')
})




var port = process.env.PORT || 8080

app.listen(port, function(){
    console.log('App running on port ' + port)
})