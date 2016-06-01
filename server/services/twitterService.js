"use strict";

var Twit = require('twit'),
    _ = require('underscore'),
    createdStreams = {},

    T = new Twit({
        'consumer_key':        process.env.TWITTER_CONSUMER_KEY,
        'consumer_secret':     process.env.TWITTER_CONSUMER_SECRET,
        'access_token':        process.env.TWITTER_ACCESS_TOKEN,
        'access_token_secret': process.env.TWITTER_ACCESS_TOKEN_SECRET
    }),

    getAllStreams = function(){
        return _.keys(createdStreams);
    },


    getStreams = function(matchId){
        return createdStreams[matchId];
    },

    //opts example {tracks: array of strings}
    //callbacks: map<string(event_name), function>
    createStream = function(opts, callbacks){
        var stream;

        if(!createdStreams[opts['match_id']]){

            stream = T.stream('statuses/filter', opts);

            if(opts['match_id']) createdStreams[opts['match_id']] = stream;

            for (var eventName in callbacks) {

                if (callbacks.hasOwnProperty(eventName)) {
                    stream.on(eventName, callbacks[eventName])
                }
            }

        }else{
            stream = createdStreams[opts['match_id']];
        }

        return stream;
    };

exports.getStreams = getStreams;
exports.getAllStreams = getAllStreams;
exports.createStream = createStream;