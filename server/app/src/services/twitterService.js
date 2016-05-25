"use strict";

var twitterConfig = require('../../../config/twitter.js'),

    Twit = require('twit'),

    T = new Twit(twitterConfig),

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