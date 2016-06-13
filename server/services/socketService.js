"use strict";

var keystone = require('keystone'),
    testService = require('./testService.js'),
    matchService = require('./matchService.js'),
    twitterService = require('./twitterService.js'),
    liveMatchService = require('./liveMatchService.js'),
    eventService = require('./eventService.js'),
    Promise = require('bluebird'),
    moment = require('moment'),
    _ = require('underscore'),

    getMatchEventsRoom = function(match){
        return `match:${match.id}:events`;
    },

    getMatchRoom = function(match){
        return `match:${match.id}`;
    },

    joinMatchEvents = function(match, socket) {
        if(socket && match){
            socket.join(getMatchEventsRoom(match));
        }
    },

    joinMatch = function(match, socket) {
        if(socket && match){
            socket.join(getMatchRoom(match));
        }
    },

    serverListeners = function(socket){

        /************************************************************************
        *                               TWITTER
        ************************************************************************/
        socket.on('twitter:relaunch', function(data){

            if(data.match_id){

                var ma = matchService.getMatchAsync(data.match_id),
                    ea;

                if(data.match_id == 'test_match'){
                    ea = testService.getActions();
                }else{
                    ea = eventService.getEventTypesAsync();
                }

                twitterService.removeStream(data.match_id);

                Promise.all([ma,ea]).then(function(results){
                    var match = results[0],
                        actions = results[1];

                    matchService.listenMatchStream(match, actions);
                    var stream = twitterService.getStreams(data.match_id);
                    
                    socket.emit('toast:success', 'Twitter stream relaunched.');
                    socket.emit('twitter:stream', {
                        'tweets': stream.tweets,
                        'tracks': stream.tracks
                    });
                },
                function(err){
                    socket.emit('toast:fail', `Fail getting match with id: ${data.match_id}.`);
                });

            }else{
                socket.emit('toast:fail', 'match_id is required to relaunch.');
            }
        });

        socket.on('twitter:get', function(data){

            if(data.match_id){
                var stream = twitterService.getStreams(data.match_id);

                socket.emit('toast:success', 'Twitter stream refresh.');

                socket.emit('twitter:stream', {
                    'tweets': stream.tweets,
                    'tracks': stream.tracks
                });

            }else{
                socket.emit('toast:fail', 'match_id is required to get.');
            }
        });


        /************************************************************************
        *                               TEST MATCH
        ************************************************************************/

        socket.on('test_match:set', function(data){
            data.start_date = moment(data.start_date).toDate();
            data.end_date = moment(data.end_date).toDate();
            testService.setMatch(data);
            socket.emit('toast:success', 'Test match updated.');
        });

        socket.on('match:test_match:process', function(data){

            var match = testService.getMatch(),
                actions = testService.getActions();

            if(match.status == 'in_progress') {
                matchService.listenMatchStream(match, actions);
                socket.emit('toast:success', 'Listening match stream.');
            }else{
                socket.emit('toast:fail', 'Invalid status.');
            }
        });


        /************************************************************************
        *                                   MATCH
        ************************************************************************/
    
        socket.on('match:live:event', function(data){

            if(data.date && data.match && data.resource && data.action){
                liveMatchService.createMatchActionEventAsync(
                    new Date(data.date), 
                    data.match, 
                    data.resource, 
                    data.action
                )
            }

            var ale = function getRandomIntInclusive(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
            var io = keystone.get('io');
            var key = `${data.action.resource_type}:${data.resource.id}:update:rating`;
            var val = ale(1,100);

            console.log('emiting to key->', key, ' - ', val);

            io.to(getMatchRoom(data.match))
                .emit(key, val);


        });

        socket.on('match:subscribe', function(data){
            console.log('match:subscribe', data);
            if(data.match){
                var matchRoom = getMatchRoom(data.match);
                console.log('match:subscribe ROOM:', matchRoom);
                socket.join(matchRoom); 
            }
        });

        //player:' + this.get('id') + ':update:rating

        socket.on('match:subscribe:events', function(data){

            if(data.match_id){

                var ma = matchService.getMatchAsync(data.match_id);

                ma.then(function(match){
                    joinMatchEvents(match, socket);
                },
                function(err){
                    socket.emit('toast:fail', `Fail getting match with id: ${data.match_id}.`);
                });

            }else{
                socket.emit('toast:fail', 'match_id is required to join events.');
            }
        });
    },

    emitOnMatchEvent = function(match, key, msg) {

        var io = keystone.get('io');

        if(!io) console.error("socket.io not found!!!")

        if(io && match && key && msg){
            io.to(getMatchEventsRoom(match))
                .emit(key, msg);
        }
    },

    emitOnMatch = function(match, key, msg) {

        var io = keystone.get('io');

        if(!io) console.error("socket.io not found!!!")

        if(io && match && key && msg){
            io.to(getMatchRoom(match))
                .emit(key, msg);
        }
    };

exports.serverListeners = serverListeners;

exports.getMatchEventsRoom = getMatchEventsRoom;
exports.getMatchRoom = getMatchRoom;

exports.emitOnMatchEvent = emitOnMatchEvent;
exports.emitOnMatch = emitOnMatch;

exports.joinMatchEvents = joinMatchEvents;
exports.joinMatch = joinMatch;

