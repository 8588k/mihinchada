// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'),        // call express
    socketio   = require('socket.io'),
    app        = express(),                 // define our app using express
    http       = require('http'),
    server     = http.createServer(app),
    io         = socketio(server),
    bodyParser = require('body-parser'),
    logger     = require('morgan'),
    matchService = require('./app/src/services/matchService.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'))

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.post('/match', function(req, res) {
    //matchService.createMatch(req.params)
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================

server.listen(port);
console.log('Mi Hinchada server running on port: ' + port);


// Set /public as our static content dir
//app.use("/", express.static(__dirname + "/public/"));
