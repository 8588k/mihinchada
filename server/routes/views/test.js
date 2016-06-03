"use strict";

var keystone = require('keystone'),
    testService = require('../../services/testService.js'),
    matchService = require("../../services/matchService.js"),
    eventService = require("../../services/eventService.js"),
    socketService = require("../../services/socketService.js"),
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
                    'title': 'Test Match'
                },
                'match': JSON.stringify(testService.getMatch())
            }
        );
    },

    testActions = function (req, res) {
        res.sendStatus(404);
    },

    testProcess = function (req, res) {
        res.sendStatus(404);
    };

exports.testMatch = testMatch;
exports.testActions = testActions;
exports.testProcess = testProcess;