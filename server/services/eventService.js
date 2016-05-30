"use strict";

var Twit = require('twit'),
    keystone = require('keystone'),
    Promise = require('bluebird'),
    _ = require('underscore'),

    getEventMap = function(et){
        return {
            'name': et.name,
            'resource_type': et.resourceType,
            'points': et.points,
            'keywords': et.getKeywords(),
            'taggable': et.taggable,
            'timeline': et.timeline,
            'emoji': et.emoji
        };
    },

    getEventTypesAsync = function() {

        return new Promise(function(resolve, reject){

            keystone.list('EventType')
                .model.find()
                .exec(function(err, result) {

                    if(err) reject(err);

                    resolve(_.map(result, getEventMap));
                });
        });

    };

exports.getEventTypesAsync = getEventTypesAsync;