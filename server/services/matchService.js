"use strict";

var twitterService = require('./twitterService.js'),
    liveMatchService = require('./liveMatchService.js'),
    keystone = require('keystone'),
    Promise = require('bluebird'),
    _ = require('underscore'),


    getManagerMap = function(m){
        return {
            'name': m.manager.name,
            'keywords': m.manager.getKeywords(),
            'rating': m.rating 
        };
    },

    getPlayerMap = function(p){
        return {
            'name': p.player.name,
            'keywords': p.player.getKeywords(),
            'playing_position': p.playingPosition,
            'since_minute': p.sinceMinute,
            'until_minute': p.untilMinute,
            'rating': p.rating,
            'tags': p.getTags()
        };
    },

    getRefereeMap = function(r){
        return {
            'name': r.referee.name,
            'keywords': r.referee.getKeywords(),
            'rating': r.rating 
        };
    },

    getTeamMap = function(t){
        return {
            'name': t.team.name,
            'score': t.score,
            'players': _.map(t.players, getPlayerMap),
            'manager': getManagerMap(t.manager),
            'kit': {
                'home_kit': t.team.homeKit,
                'away_kit': t.team.awayKit
            },
            'badge': t.team.badge,
            'rating': t.rating 
        };
    },

    getMatchMap = function(m){

        var homeTeam = _.find(m.teams, function(t){ return t.location == 'home'; }),
            awayTeam = _.find(m.teams, function(t){ return t.location == 'away'; });

        return {
            'start_date': m.startDate,
            'end_date': m.endDate,
            'team_home': getTeamMap(homeTeam),
            'team_away': getTeamMap(awayTeam),
            'referee': getRefereeMap(m.referee),
            'stadium_name': m.stadium
        };
    },

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
        var teams = ['home','away'],
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
            switch(eventAction.resourceType) {
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
    },


    getMatchManagerAsync = function(matchManagerId, population) {

        population = population || 'manager';

        return new Promise(function(resolve, reject){

            keystone.list('MatchManager')
                .model.findOne()
                .where('_id', matchManagerId)
                .populate(population)
                .exec(function(err, manager) {

                    if(err) reject(err);

                    resolve(manager);
                });
        });

    },

    getMatchRefereeAsync = function(matchRefereeId, population) {

        population = population || 'referee';

        return new Promise(function(resolve, reject){

            keystone.list('MatchReferee')
                .model.findOne()
                .where('_id', matchRefereeId)
                .populate(population)
                .exec(function(err, referee) {

                    if(err) reject(err);

                    resolve(referee);
                });
        });

    },

    getMatchPlayersAsync = function(matchPlayersIds, population) {

        population = population || 'player';

        return new Promise(function(resolve, reject){

            keystone.list('MatchPlayer')
                .model.find()
                .where('_id', { '$in': matchPlayersIds })
                .populate(population)
                .exec(function(err, players) {

                    if(err) reject(err);

                    resolve(players);
                });
        });

    },

    getMatchAsync = function(matchId, population) {

        population = population || 'teams competition';

        return new Promise(function(resolve, reject){

            keystone.list('Match')
                .model.findOne()
                .where('_id', matchId)
                .populate(population)
                .exec(function (err, match) {

                    if(err) reject(err);

                    var ps = _.map(match['teams'], function(team){
                        var players = getMatchPlayersAsync(team['players']);
                        var manager = getMatchManagerAsync(team['manager']);
                        return [players,manager];
                    });

                    ps.push(getMatchRefereeAsync(match['referee']));

                    Promise.all(_.flatten(ps)).then(function(res){

                        var add = 0;
                        _.each(match['teams'], function(team, index, list){
                            team['players'] = res[index + add];
                            team['manager'] = res[index + add +1];
                            add = 1;
                        });

                        match['referee'] = res[4];

                        resolve(getMatchMap(match));

                    },function(err){

                        reject(err);
                    });
                });
        });
    };


exports.startMatch = startMatch;
exports.iterateMatchTeams = iterateMatchTeams;
exports.iterateMatchPlayers = iterateMatchPlayers;
exports.listenMatchStream = listenMatchStream;
exports.getMatchStreamTracks = getMatchStreamTracks;
exports.getTweetAction = getTweetAction;
exports.processMatchTweet = processMatchTweet;
exports.getMatchAsync = getMatchAsync;

exports.liveMatchService = liveMatchService;