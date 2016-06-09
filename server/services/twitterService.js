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
        return _.values(createdStreams);
    },

    removeStream = function(matchId){
        var s = createdStreams[matchId];
        if(s){
            s.stream.stop();
            console.log('Twitter stream stoped.')
            delete createdStreams[matchId];
        }
    },

    getStreams = function(matchId){
        return createdStreams[matchId];
    },

    //opts example {track: array of strings}
    //callbacks: map<string(event_name), function>
    createStream = function(opts, callbacks){
        var stream;

        if(!createdStreams[opts['match_id']]){

            stream = T.stream('statuses/filter', opts);

            if(opts['match_id']){ 
                createdStreams[opts['match_id']] = {
                    'match_id': opts['match_id'],
                    'stream' : stream,
                    'tracks' : opts['track'],
                    'tweets' : 0
                };
            }

            for (var eventName in callbacks) {

                if (callbacks.hasOwnProperty(eventName)) {
                    stream.on(eventName, callbacks[eventName])
                }

                stream.on('tweet', function(tw){
                    if(createdStreams[opts['match_id']]){
                        createdStreams[opts['match_id']]['tweets'] += 1;    
                    }
                });
            }

        }else{
            stream = createdStreams[opts['match_id']]['stream'];
        }

        return stream;
    };
exports.removeStream = removeStream;
exports.getStreams = getStreams;
exports.getAllStreams = getAllStreams;
exports.createStream = createStream;