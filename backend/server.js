// BASE SETUP
// =============================================================================
const config = require('./config/env.js');

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');
var footyAPI   = require('./app/functions/footballAPI')

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

// DATABASE SETUP
var mongoose   = require('mongoose');
mongoose.connect(config.database.url, config.database.options)

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});

footyAPI.populateNewDB();


// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	footyAPI.createUpdateLoop();
	next();
});

var teamRoutes = require('./app/routes/teams'),
	LeagueRoutes = require('./app/routes/leagues'),
	userRoutes = require('./app/routes/users');

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router
	.use('/teams', teamRoutes)
	.use('/leagues', LeagueRoutes)
	.use('/users', userRoutes);


module.exports = router;

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
