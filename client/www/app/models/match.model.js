App.module('miHinchada.Models', function (Models, App, Backbone, Marionette, $, _) {
    
    Models.Match = Backbone.Model.extend({
        urlRoot: '/football-match',
        defaults: {
            'match': {
                'start_date': null,
                'end_date': null,
                'team_home': {
                    'name': null,
                    'keywords': null,
                    'manager': {
                        'name': null,
                        'last_name': null,
                        'keywords': null,
                        'rating': null
                    },
                    'players': [
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        }
                    ],
                    'kit': null,
                    'badge': null,
                    'goals': {
                        'player_id': null,
                        'minute': null
                    },
                    'rating': null
                },
                'team_away': {
                    'name': null,
                    'keywords': null,
                    'manager': {
                        'name': null,
                        'last_name': null,
                        'keywords': null,
                        'rating': null
                    },
                    'players': [
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        },
                        {
                            'name': null,
                            'last_name': null,
                            'keywords': null,
                            'playing_position': null,
                            'since_minute': null,
                            'until_minute': null,
                            'rating': null,
                            'tags': null
                        }
                    ],
                    'kit': null,
                    'badge': null,
                    'goals': {
                        'player_id': null,
                        'minute': null
                    },
                    'rating': null
                },
                'referee': {
                    'name': null,
                    'last_name': null,
                    'keywords': null,
                    'rating': null
                },
                'stadium_name': null,
                'live_users': null,
                'total_users': null
            }
        }
    });
});