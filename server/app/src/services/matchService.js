"use strict";

var twitterService = require('./twitterService.js'),
    liveMatchService = require('./liveMatchService.js'),

    startMatch = function(matchId){

    },

    checkPush = function(list, obj) {

        if(list && obj){
            if(Array.isArray(obj) ){
                var key;
                for(key in obj){
                    list.push(obj[key]);
                }
            }else{
                list.push(obj);
            }
        }
    },

    iterateMatchTeams = function(match, callback){
        var teams = ['team_home','team_away'],
            t, team;

        for(t in teams){
            team = match[teams[t]];

            callback(team)
        }
    },

    iterateMatchPlayers = function(match, callback){
        var p, player;

        iterateMatchTeams(match, function(team){
            for(p in team.players){
                player = team.players[p];

                callback(player);
            }
        });
    },

    getMatchStreamTracks = function(match, actions) {
        var tracks = [];

        checkPush(tracks, match.referee.last_name);
        checkPush(tracks, match.referee.keywords);

        iterateMatchTeams(match, function(team){
            checkPush(tracks, team.name);
            checkPush(tracks, team.keywords);

            checkPush(tracks, team.manager.last_name);
            checkPush(tracks, team.manager.keywords);
        });

        iterateMatchPlayers(match, function(player){
            checkPush(tracks, player.last_name);
            checkPush(tracks, player.keywords);
        });

        for(var idx in actions){
            checkPush(tracks, actions[idx].keywords); 
        }

        return tracks.join();
    },

    findKeyword = function(text, keywords){
        var i,
            keyword, 
            lowerText = text.toLowerCase();
        for(i in keywords){
            keyword = keywords[i].toLowerCase();

            if(lowerText.indexOf(keyword) > -1){
                return keyword;
            }
        }
        return false;
    },

    getTweetAction = function(actions, tweet){
        var eventAction = null,
            idx;

        for(idx in actions){
            var action = actions[idx];

            if(action.keywords && findKeyword(tweet.text, action.keywords)){
                eventAction = action;
                break;
            }
        }
        return eventAction;
    },

    processMatchTweet = function(match, actions, tweet){
        //console.log(tweet);
        var eventAction = getTweetAction(actions, tweet),
            resourceKeywords,
            resource;

        if(eventAction){
            switch(eventAction.resource_type) {
                case 'player':
                    iterateMatchPlayers(match, function(player){
                        if(!resource){
                            resourceKeywords = [];
                            checkPush(resourceKeywords, player.last_name);
                            checkPush(resourceKeywords, player.keywords);

                            if(findKeyword(tweet.text, resourceKeywords)){
                                resource = player;
                            }
                        }
                    });
                break;
                case 'referee':
                    resourceKeywords = [];
                    checkPush(resourceKeywords, match.referee.last_name);
                    checkPush(resourceKeywords, match.referee.keywords);

                    if(findKeyword(tweet.text, resourceKeywords)){
                        resource = match.referee;
                    }
                break;
                case 'team':
                    iterateMatchTeams(match, function(team){
                        if(!resource){
                            resourceKeywords = [];
                            checkPush(resourceKeywords, team.name);
                            checkPush(resourceKeywords, team.keywords);

                            if(findKeyword(tweet.text, resourceKeywords)){
                                resource = team;
                            }
                        }
                    });
                break;
                case 'manager':
                    iterateMatchTeams(match, function(team){
                        if(!resource){
                            resourceKeywords = [];
                            checkPush(resourceKeywords, team.manager.last_name);
                            checkPush(resourceKeywords, team.manager.keywords);

                            if(findKeyword(tweet.text, resourceKeywords)){
                                resource = team;
                            }
                        }
                    });
                break;
            }
        }

        if(eventAction && resource){
            liveMatchService.createMatchActionEventAsync(
                tweet.created_at, 
                match, 
                resource,
                eventAction
            );
        }
    },

    listenMatchStream = function(match, actions, duration) {

        var tracks = getMatchStreamTracks(match, actions),

            duration = duration || ((1000 * 60 * 45 * 2) + (1000 * 60 * 20)),

            stream = twitterService.createStream({'track': tracks}, {
                'tweet': function(tweet){
                    processMatchTweet(match, actions, tweet);
                }
            });

            setTimeout(function(){ 
                stream.stop();
            }, duration);

        return stream;
    };

 


exports.startMatch = startMatch;
exports.iterateMatchTeams = iterateMatchTeams;
exports.iterateMatchPlayers = iterateMatchPlayers;
exports.listenMatchStream = listenMatchStream;
exports.getMatchStreamTracks = getMatchStreamTracks;
exports.getTweetAction = getTweetAction;
exports.processMatchTweet = processMatchTweet;


exports.liveMatchService = liveMatchService;