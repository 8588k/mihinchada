"use strict";

var keystone = require('keystone'),
    socketService = require('./socketService.js'),
    _ = require('underscore'),

    loadKueProcesses = function() {
        var queue = keystone.get('queue');

        queue.process('match_rating_update', function(job, done){

            console.log('processing match_rating_update: ', job.data);

            var io = keystone.get('io');
            var act = job.data.action;
            var res = job.data.resource;

            var key = `${act.resource_type}:${res.id}:update:rating`;
            var val = job.data.overall[`${act.resource_type}_${res.id}_points`];

            console.log('emiting to key->', key, ' -> ', val);

            socketService.emitOnMatch(job.data.match, key, val)

            done();
        });

    };

exports.loadKueProcesses = loadKueProcesses;