"use strict";

var redisConfig = require('../../../config/redis.js'),
    redis = require("redis"),
    bluebird = require("bluebird"),
    client;

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
client = redis.createClient(redisConfig);

module.exports = client;