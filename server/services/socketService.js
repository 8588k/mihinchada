"use strict";

var keystone = require('keystone'),
    Promise = require('bluebird'),
    _ = require('underscore'),

    getInternalMatchRoom = function(match){
        return `internal-match-${match.id}`;
    },

    joinInternalMatch = function(match, socket) {
        if(socket && match){
            socket.join(getInternalMatchRoom(match));
        }
    },

    emitOnInternalMatch = function(match, key, msg) {

        var io = keystone.get('io');

        if(!io) console.error("socket.io not found!!!")

        if(io && match && key && msg){
            io.to(getInternalMatchRoom(match))
                .emit(key, msg);
        }
    };

exports.getInternalMatchRoom = getInternalMatchRoom;
exports.emitOnInternalMatch = emitOnInternalMatch;
exports.joinInternalMatch = joinInternalMatch;