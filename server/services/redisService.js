"use strict";

var redis = require("redis"),
    bluebird = require("bluebird"),
    client;

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client = redis.createClient({
    'host': process.env.REDIS_HOST,
    'port': process.env.REDIS_PORT
});

module.exports = client;