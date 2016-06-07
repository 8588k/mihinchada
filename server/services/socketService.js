"use strict";

var keystone = require('keystone'),
    Promise = require('bluebird'),
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

exports.getMatchEventsRoom = getMatchEventsRoom;
exports.getMatchRoom = getMatchRoom;

exports.emitOnMatchEvent = emitOnMatchEvent;
exports.emitOnMatch = emitOnMatch;

exports.joinMatchEvents = joinMatchEvents;
exports.joinMatch = joinMatch;

