require('dotenv').load();

describe("matchService suite", function() {

    var matchService = require("../../services/matchService.js");

    it("create tracks for a match", function() {
        var actions = [
            {
                'resourceType':'team',
                'points': 1,
                'name': 'Alentar',
                'keywords': ['vamos','aguante','arriba']
            },
            {
                'resourceType':'player',
                'points': 2,
                'name': 'Gol',
                'keywords': ['gol','gool','goool','goal']
            }
        ],

        match = {
            'date': new Date(),
            'team_home': {
                'name': 'Boca',
                'keywords': ['xeneizes', 'Azul y Oro', 'La Mitad Más Uno','@BocaJrsOficial'],
                'manager': {
                    'name': {
                        'first':'Rodolfo',
                        'last': 'Arruabarrena'
                    },
                    'keywords': ['Vasco'],
                    'rating': 50
                },  
                'players': [
                    {
                        'name': {'first':'Juan Roman', 'last': 'Riquelme'},
                        'keywords': null,
                        'playing_position': '10',
                        'since_minute': 0,
                        'rating': 50
                    }
                ],
                'rating':50
            },
            'team_away': {
                'name': 'River',
                'keywords': null,
                'manager': {
                    'name': {'first':'Marcelo', 'last': 'Gallardo'},
                    'keywords': null,
                    'rating': 50
                },  
                'players': [
                    {
                        'name': {'first':'Pablo','last': 'Aimar'},
                        'keywords': null,
                        'playing_position': '10',
                        'since_minute': 0,
                        'rating': 50
                    }
                ],
                'rating':50
            },
            'referee':{
                'name': {'first':'Diego', 'last': 'Ceballos'},
                'keywords': null,
                'rating': 50
            }
        },

        tracks = matchService.getMatchStreamTracks(match, actions);

        expect(tracks.indexOf('Riquelme') !== -1).toBe(true);
        expect(tracks.indexOf('Aimar') !== -1).toBe(true);
        expect(tracks.indexOf('Boca') !== -1).toBe(true);
        expect(tracks.indexOf('River') !== -1).toBe(true);
        expect(tracks.indexOf('Ceballos') !== -1).toBe(true);
        expect(tracks.indexOf('Arruabarrena') !== -1).toBe(true);
        expect(tracks.indexOf('Gallardo') !== -1).toBe(true);
        expect(tracks.indexOf('gol') !== -1).toBe(true);
        expect(tracks.indexOf('vamos') !== -1).toBe(true);
        expect(tracks.indexOf('xeneizes') !== -1).toBe(true);
        expect(tracks.indexOf('Azul y Oro') !== -1).toBe(true);

        expect(tracks.indexOf('null') === -1).toBe(true);

    });

    it("iterate match teams", function() {
        var match = {
            'date': new Date(),
            'team_home': {
                'name': 'Boca',
                'keywords': ['xeneizes', 'Azul y Oro', 'La Mitad Más Uno','@BocaJrsOficial'],
                'rating':51
            },
            'team_away': {
                'name': 'River',
                'keywords': null,
                'rating':49
            }
        }, 
        totalTeams = 0,
        isBocaPresent = false,
        isRiverPresent = false;

        matchService.iterateMatchTeams(match, function(team){
            totalTeams++;
            if(team.name == 'Boca') isBocaPresent = true;
            if(team.name == 'River') isRiverPresent = true;
        });

        expect(totalTeams).toBe(2);
        expect(isBocaPresent).toBe(true);
        expect(isRiverPresent).toBe(true);
    });

    it("iterate match players", function() {
        var match = {
            'date': new Date(),
            'team_home': {
                'players': [
                    {
                        'name': {'first':'Juan Roman','last': 'Riquelme'},
                        'keywords': null,
                        'playing_position': '10',
                        'since_minute': 0,
                        'rating': 50
                    },
                    {
                        'name': {'first':'Martin', 'last': 'Palermo'},
                        'keywords': null,
                        'playing_position': '9',
                        'since_minute': 0,
                        'rating': 50
                    }
                ]
            },
            'team_away': {
                'players': [
                    {
                        'name': {'first':'Pablo', 'last': 'Aimar'},
                        'keywords': null,
                        'playing_position': '10',
                        'since_minute': 0,
                        'rating': 50
                    },
                    {
                        'name': {'first':'Radamel', 'last': 'Falcao'},
                        'keywords': null,
                        'playing_position': '9',
                        'since_minute': 0,
                        'rating': 50
                    }
                ]
            }
        }, 
        totalPlayers = 0,
        isJRRPresent = false,
        isAimarPresent = false;

        matchService.iterateMatchPlayers(match, function(team){
            totalPlayers++;
            if(team.name.last == 'Riquelme') isJRRPresent = true;
            if(team.name.last == 'Aimar') isAimarPresent = true;
        });

        expect(totalPlayers).toBe(4);
        expect(isJRRPresent).toBe(true);
        expect(isAimarPresent).toBe(true);
    });

    it("determine a tweet action", function() {
        var tweet = {
            'date': new Date(),
            'text': ''
        }, 
        actions = [
            {
                'name': 'Gol',
                'resourceType': 'player',
                'points': 2,
                'keywords': ['gol', 'goal']
            },
            {
                'name': 'Alentar',
                'resourceType': 'team',
                'points': 3,
                'keywords': ['vamos', 'aguante']
            }
        ],
        action = matchService.getTweetAction(actions, tweet);

        expect(action).toBeNull();

        tweet = {
            'date': new Date(),
            'text': 'Aguante Boca carajo!'
        };

        action = matchService.getTweetAction(actions, tweet);

        expect(action.name).toBe('Alentar');
        expect(action.points).toBe(3);
    });

    it("test process a tweet", function() {
        var tweet = {
            'created_at': new Date(),
            'text': 'GOLAZO! Soberbio gol de Juan Roman Riquelme!!!'
        }, 
        actions = [
            {
                'name': 'Gol',
                'resourceType': 'player',
                'points': 2,
                'keywords': ['gol', 'goal', 'golazo']
            },
            {
                'name': 'Alentar',
                'resourceType': 'team',
                'points': 3,
                'keywords': ['vamos', 'aguante']
            },
        ],
        match = {
            'date': new Date(),
            'team_home': {
                'name': 'Boca',
                'keywords': ['xeneizes', 'Azul y Oro', 'La Mitad Más Uno','@BocaJrsOficial'],
                'manager': {
                    'name': {'first':'Rodolfo', 'last': 'Arruabarrena'},
                    'keywords': ['Vasco'],
                    'rating': 50
                },  
                'players': [
                    {
                        'name': {'first':'Juan Roman', 'last': 'Riquelme'},
                        'keywords': null,
                        'playing_position': '10',
                        'since_minute': 0,
                        'rating': 50
                    }
                ],
                'rating':50
            },
            'team_away': {
                'name': 'River',
                'keywords': null,
                'manager': {
                    'name': {'first':'Marcelo', 'last': 'Gallardo'},
                    'keywords': null,
                    'rating': 50
                },  
                'players': [
                    {
                        'name': {'first':'Pablo', 'last': 'Aimar'},
                        'keywords': null,
                        'playing_position': '10',
                        'since_minute': 0,
                        'rating': 50
                    }
                ],
                'rating':50
            },
            'referee':{
                'name': {'first':'Diego', 'last': 'Ceballos'},
                'keywords': null,
                'rating': 50
            }
        };

        var oldCreateMatchActionEvent = matchService.liveMatchService.createMatchActionEventAsync;

        matchService.liveMatchService.createMatchActionEventAsync = jasmine.createSpy('createMatchActionEventAsync');

        matchService.processMatchTweet(match, actions, tweet);

        expect(matchService.liveMatchService.createMatchActionEventAsync).toHaveBeenCalled();
        expect(matchService.liveMatchService.createMatchActionEventAsync.calls.length).toEqual(1);

        matchService.processMatchTweet(match, actions, tweet);

        expect(matchService.liveMatchService.createMatchActionEventAsync.calls.length).toEqual(2);

        actions = [
            {
                'name': 'Alentar',
                'resourceType': 'team',
                'points': 3,
                'keywords': ['vamos', 'aguante']
            }
        ];

        matchService.processMatchTweet(match, actions, tweet);
        expect(matchService.liveMatchService.createMatchActionEventAsync.calls.length).toEqual(2);

        matchService.liveMatchService.createMatchActionEventAsync = oldCreateMatchActionEvent;
    });
});
