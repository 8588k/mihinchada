"use strict";

var Twit = require('twit'),

    T = new Twit({
        'consumer_key':        process.env.TWITTER_CONSUMER_KEY,
        'consumer_secret':     process.env.TWITTER_CONSUMER_SECRET,
        'access_token':        process.env.TWITTER_ACCESS_TOKEN,
        'access_token_secret': process.env.TWITTER_ACCESS_TOKEN_SECRET
    }),

    //opts example {tracks: array of strings}
    //callbacks: map<string(event_name), function>
    createStream = function(opts, callbacks){

        var stream = T.stream('statuses/filter', opts);

        for (var eventName in callbacks) {

            if (callbacks.hasOwnProperty(eventName)) {
                stream.on(eventName, callbacks[eventName])
            }
        }

        return stream;
    };


exports.createStream = createStream;