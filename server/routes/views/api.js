var matchService = require("../../services/matchService.js"),
    testService = require("../../services/testService.js"),
    eventService = require("../../services/eventService.js"),
    keystone = require('keystone'),
    Promise = require('bluebird'),

    getMatch = function (req, res) {

        matchService.getMatchAsync(req.params.matchId).then(function(m){
            res.setHeader('Access-Control-Allow-Credentials',"true");
            res.setHeader('Access-Control-Allow-Headers', "X-Requested-With");
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(m));

        },
        function(err){
            res.sendStatus(404);
        });
    },

    getEvents = function (req, res) {

        res.setHeader('Content-Type', 'application/json');

        eventService.getEventTypesAsync().then(function(events){
            
            res.send(JSON.stringify(events));
        }, 
        function(err){
            res.send(JSON.stringify(err));
        });
    };
/*
exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    var match;

    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'matchprocess';

    matchService.getMatchAsync('574955f6ca3e6d25a70019ff').then(function(m){


        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(m));
        //view.render('matchprocess');
    })

    
    //matchService.listenMatchStream(match, actions, duration);


};
*/

exports.getMatch = getMatch;
exports.getEvents = getEvents;
