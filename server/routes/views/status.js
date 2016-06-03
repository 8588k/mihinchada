"use strict";

var keystone = require('keystone'),
    twitterService = require('../../services/testService.js'),
    matchService = require("../../services/matchService.js"),
    eventService = require("../../services/eventService.js"),
    socketService = require("../../services/socketService.js"),
    Promise = require('bluebird'),
    _ = require('underscore'),

    twiter = function (req, res) {
        res.sendStatus(404);
    },

    sockets = function (req, res) {
        res.sendStatus(404);
    };

exports.twiter = twiter;
exports.sockets = sockets;