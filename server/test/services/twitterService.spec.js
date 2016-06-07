require('dotenv').load();

describe("twitterService suite", function() {

    var twitterService = require("../../services/twitterService.js");

    it("create streams and execute callbacks", function(done) {

        var msgsCount = 0,
            opts = {
                'track': ['twitter','futbol','football']
            },
            stream = twitterService.createStream(opts, {
                'message': function(msg){
                    console.log('new message:', msg);
                    msgsCount++;
                },
                'error': function(err){
                    console.log('error in stream.');
                },
                'connect': function(err){
                    //console.log('connect to stream.');
                },
                'connected': function(err){
                    //console.log('connected to stream.');
                },
                'disconnect': function(err){
                    console.log('disconnect from stream.');
                }
            });

        setTimeout(function(){
            stream.stop();

            expect(msgsCount).toBeGreaterThan(0);

            done();

        }, 3000);

    });

});
