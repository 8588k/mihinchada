App.module('miHinchada.Models', function (Models, App, Backbone, Marionette, $, _) {
    
    Models.Match = Backbone.Model.extend({
        urlRoot: 'http://localhost:3000/api/matches',
        defaults: {
            'id': null,
            'status': null,
            'start_date': null,
            'end_date': null,
            'team_home': {
                'id': null,
                'name': null,
                'keywords': null,
                'manager': {
                    'id': null,
                    'name': {
                        'first': null,
                        'last': null
                    },
                    'keywords': null,
                    'rating': null
                },
                'players': [
                    {
                        'id': null,
                        'name': {
                            'first': null,
                            'last': null
                        },
                        'keywords': null,
                        'playing_position': null,
                        'since_minute': null,
                        'rating': null,
                    }
                ],
                'score': null,
                'rating': null
            },
            'team_away': {
                'id': null,
                'name': null,
                'keywords': null,
                'manager': {
                    'id': null,
                    'name': {
                        'first': null,
                        'last': null
                    },
                    'keywords': null,
                    'rating': null
                },
                'players': [
                    {
                        'id': null,
                        'name': {
                            'first': null,
                            'last': null
                        },
                        'keywords': null,
                        'playing_position': null,
                        'since_minute': null,
                        'rating': null,
                    }
                ],
                'score': null,
                'rating': null
            },
            'referee': {
                id: null,
                'name': {
                    'first': null,
                    'last': null
                },
                'keywords': null,
                'rating': null
            }
        }
    });
});