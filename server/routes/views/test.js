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
        var view = new keystone.View(req, res),
            locals = res.locals,
            io = keystone.get('io');


        io.on('connect', function(socket){
            socket._events = {};
            socket.adapter._events = {};

            socket.on('test_match:set', function(data){
                testService.setMatch(data);
                socket.emit('toast:success', 'Test match updated.');
            });

            socket.on('disconnect', function(){
                socket._events = {};
                socket.adapter._events = {};
            });
        });


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
            locals = res.locals,
            io = keystone.get('io'),
            match = testService.getMatch(),
            actions = testService.getActions();


        io.on('connect', function(socket){
            socket._events = {};
            socket.adapter._events = {};

            socketService.joinMatchEvents(match, socket);

            socket.on('match:test_match:process', function(data){

                if(match.status == 'in_progress') {
                    matchService.listenMatchStream(match, actions);
                    socket.emit('toast:success', 'Listening match stream.');
                }else{
                    socket.emit('toast:fail', 'Invalid status.');
                }

            });

            socket.on('disconnect', function(){
                socket._events = {};
                socket.adapter._events = {};
            });
        });

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