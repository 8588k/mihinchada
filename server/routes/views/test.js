"use strict";

var keystone = require('keystone'),
    testService = require('../../services/testService.js'),
    matchService = require("../../services/matchService.js"),
    liveMatchService = require("../../services/liveMatchService.js"),
    eventService = require("../../services/eventService.js"),
    socketService = require("../../services/socketService.js"),
    twitterService = require("../../services/twitterService.js"),
    Promise = require('bluebird'),
    _ = require('underscore'),


    testMatch = function (req, res) {
        var view = new keystone.View(req, res);

        view.render(
            'testmatch', 
            {
                'layout': 'lte',
                'box':{
                    'title': 'Test Match',
                    'collapseable': true
                },
                'match': JSON.stringify(testService.getMatch())
            }
        );
    },

    testActions = function (req, res) {
        res.sendStatus(404);
    },

    testProcess = function (req, res) {
        var view = new keystone.View(req, res),
            match = testService.getMatch(),
            actions = testService.getActions();

        liveMatchService.getLiveMatchAsync(match).then(
            function(liveMatch){

                view.render(
                    'testprocess', 
                    {
                        'layout': 'lte',
                        'box':{
                            'title': 'Process Test Match',
                            'collapseable': true
                        },
                        'match': match,
                        'match_str': JSON.stringify(match),
                        'live_match': liveMatch,
                        'live_match_str': JSON.stringify(liveMatch),
                        'events_str': JSON.stringify(actions),
                        'twitter': _.find(twitterService.getAllStreams(), function(s){ 
                            return s.match_id == 'test_match';
                        })
                    }
                );
            },
            function(err){
                console.log('ERROR:', err);
                res.sendStatus(500);
            }
        );
    };


exports.testMatch = testMatch;
exports.testActions = testActions;
exports.testProcess = testProcess;