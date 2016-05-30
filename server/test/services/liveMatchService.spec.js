require('dotenv').load();

describe("liveMatchService suite", function() {

    var liveMatchService = require("../../services/liveMatchService.js"),
        Promise = require('bluebird');

    it("set and get live match from redis", function(done) {

        liveMatchService.setRedisLiveMatchAsync(
            'test',
            {
                'jrr': 10,
                'messi':'crack'
            }
        ).then(function(){

            liveMatchService.getRedisLiveMatchAsync(
                'test'
            ).then(function(data){
                expect(data.jrr).toBe('10');
                expect(data.messi).toBe('crack');
                done();
            })            
        });

    });

   it("set and get multiple keys", function(done) {

        var promises = [
            liveMatchService.setRedisLiveMatchAsync(
                'm1',
                {
                    'jrr': 'm1',
                    'messi':'m1'
                }
            ),
            liveMatchService.setRedisLiveMatchAsync(
                'm2',
                {
                    'jrr': 'm2',
                    'messi':'m2'
                }
            ),
            liveMatchService.getRedisLiveMatchAsync('m1'),
            liveMatchService.getRedisLiveMatchAsync('m2')

        ];

        Promise.all(promises).then(function(results){
            expect(results[2].jrr).toBe('m1');
            expect(results[3].jrr).toBe('m2');
            done();
        });

    });

   it("get key not found", function(done) {
        liveMatchService.getRedisLiveMatchAsync('__sarasa').then(function(data){
            expect(data).toBe(null);
            done();
        });
    });

   it("save match event", function(done){

        var match = {
            'id': 'idmatch',
            'start_date': new Date(new Date().getTime() - 3*60000),
            'end_date': new Date(new Date().getTime() + 115*60000),
            'team_home': {
                'id': 'idboca',
                'name': 'Boca',
                'keywords': ['xeneizes', 'Azul y Oro', 'La Mitad Más Uno','@BocaJrsOficial'],
                'manager': {
                    'id': 'idvasco',
                    'name': 'Rodolfo',
                    'last_name': 'Arruabarrena',
                    'keywords': ['Vasco'],
                    'rating': 50
                },  
                'players': [
                    {
                        'id': 'idjrr',
                        'name': 'Juan Roman',
                        'last_name': 'Riquelme',
                        'keywords': null,
                        'playing_position': '10',
                        'since_minute': 0,
                        'rating': 50
                    }
                ],
                'rating':50
            },
            'team_away': {
                'id': 'idriv',
                'name': 'River',
                'keywords': null,
                'manager': {
                    'id': 'idgall',
                    'name': 'Marcelo',
                    'last_name': 'Gallardo',
                    'keywords': null,
                    'rating': 50
                },  
                'players': [
                    {
                        'id': 'idgpab',
                        'name': 'Pablo',
                        'last_name': 'Aimar',
                        'keywords': null,
                        'playing_position': '10',
                        'since_minute': 0,
                        'rating': 50
                    }
                ],
                'rating':50
            },
            'referee':{
                'id': 'idceb',
                'name': 'Diego',
                'last_name': 'Ceballos',
                'keywords': null,
                'rating': 50
            }
        },
        resource = {
            'id': 'idboca',
            'name': 'Boca',
            'keywords': ['xeneizes', 'Azul y Oro', 'La Mitad Más Uno','@BocaJrsOficial']
        },
        action = {
            'name': 'Alentar',
            'resourceType': 'team',
            'points': 3,
            'keywords': ['vamos', 'aguante']
        };

        var prom = liveMatchService.createMatchActionEventAsync(
            new Date(), 
            match, 
            resource, 
            action
        );

        prom.then(function(res){
            expect(res[0]).toBe('OK');
            expect(res[1]).toBe('OK');
            done();
        },function(res){
            console.log('fail');
            expect(true).toBe(false);
            done();
        });

   })

});
