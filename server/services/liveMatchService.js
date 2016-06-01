"use strict";

var matchService = require('./matchService.js'),
    redis = require('./redisService.js'),
    Promise = require('bluebird'),
    moment = require('moment'),
    socketService = require('./socketService.js'),
    
    getMatchMinute = function(date, match){
        return moment(date).diff(moment(match.start_date), 'minutes');
    },

    getRedisMatchkey = function(match){
        return 'match_' + match.id;
    },

    getRedisMatchMinutekey = function(match, min){
        return 'match_' + match.id + '_min_' + min;
    },

    getRedisLiveMatchAsync = function(key){
        return redis.hgetallAsync(key);
    },

    setRedisLiveMatchAsync = function(key, map){
        return redis.hmsetAsync(key, map);
    },

    add = function(map, key, value){
        var prev = parseInt(map[key]|| 0);
        var addValue = parseInt(value|| 1);
        map[key] = prev + addValue;
    },

     /*  Crea un evento de una accion para un recurso
     *
     *  date: fecha (deberia estar dentro de los limites del partido)
     *  match: dto del partido
     *  resource: dto de (player/team/manager/referee)
     *  action: dto de la accion
     **/
    createMatchActionEventAsync = function(date, match, resource, action, ref){

        socketService.emitOnInternalMatch(match, 'new-match-event', {
            'date': date,
            'resource': resource,
            'action':action,
            'ref': ref
        });

        return new Promise(function(resolve, reject){

            var matchKey, matchMinKey, redisMatch, redisMatchAsync, promises,
                redisMinMatchAsync, redisMinMatch, liveMatch, min, prevRank, idx,
                dateTime = date.getTime(),
                matchStartDateTime = match.start_date.getTime(),
                matchEndDateTime = match.end_date.getTime();

            if(match.status == 'in_progress'){

                min = getMatchMinute(date, match),
                matchKey = getRedisMatchkey(match),
                matchMinKey = getRedisMatchMinutekey(match, min),

                redisMatchAsync = getRedisLiveMatchAsync(matchKey), 
                redisMinMatchAsync = getRedisLiveMatchAsync(matchMinKey),
                promises = [redisMatchAsync, redisMinMatchAsync];

                Promise.all(promises).then(function(result){

                    for(idx in result){
                        liveMatch = result[idx] || {};

                        add(liveMatch, `${action.resource_type}_total_points`, action.points);
                        add(liveMatch, `${action.resource_type}_${resource.id}_points`, action.points);
                        add(liveMatch, `${action.resource_type}_actions_qty`, 1);
                        add(liveMatch, `${action.resource_type}_action_${action.name}_qty`, 1);
                        liveMatch[`${action.resource_type}_${resource.id}_ranking`] = 
                            parseInt(liveMatch[`${action.resource_type}_${resource.id}_ranking`] || 50);

                        result[idx] = liveMatch;
                    }

                    redisMatch = result[0];
                    redisMinMatch = result[1];

                    Promise.all([
                        setRedisLiveMatchAsync(matchKey, redisMatch),
                        setRedisLiveMatchAsync(matchMinKey, redisMinMatch)

                    ]).then(function(res){

                        socketService.emitOnInternalMatch(match, 'overall', redisMatch);

                        resolve(res);

                    },function(err){

                        reject(err);
                    });

                },function(err){

                    reject(err);
                });
            }else{
                reject('Invalid event date');
            }
        });
    };

exports.getRedisLiveMatchAsync = getRedisLiveMatchAsync;
exports.setRedisLiveMatchAsync = setRedisLiveMatchAsync;
exports.createMatchActionEventAsync = createMatchActionEventAsync;
