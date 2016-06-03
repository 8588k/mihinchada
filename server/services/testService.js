"use strict";

var _ = require('underscore'),
    actions = [
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
        'id': 'test_match',
        'status': 'in_progress',
        'start_date': new Date(new Date().getTime() - 0*60000),
        'end_date': new Date(new Date().getTime() + 90*60000),
        'team_home': {
            'id': 'idboca',
            'name': 'Boca',
            'keywords': ['xeneizes', 'Azul y Oro', 'La Mitad Más Uno','@BocaJrsOficial'],
            'manager': {
                'id': 'idvasco',
                'name': {'first': 'Rodolfo', 'last': 'Arruabarrena'},
                'keywords': ['Vasco'],
                'rating': 50
            },  
            'players': [
                {
                    'id': 'idjrr',
                    'name': {'first': 'Juan Roman', 'last': 'Riquelme' },
                    'keywords': ['jrr', 'el ultimo 10', 'juan roman', 'torero'],
                    'playing_position': '10',
                    'since_minute': 0,
                    'rating': 50
                }
            ],
            'score': 0,
            'rating':50
        },
        'team_away': {
            'id': 'idriver',
            'name': 'River',
            'keywords': null,
            'manager': {
                'id': 'idmgallardo',
                'name': 'Marcelo',
                'last_name': 'Gallardo',
                'keywords': ['muñeco'],
                'rating': 50
            },  
            'players': [
                {
                    'id': 'idpaimar',
                    'name': {'first': 'Pablo', 'last': 'Aimar'},
                    'keywords': ['payaso'],
                    'playing_position': '10',
                    'since_minute': 0,
                    'rating': 50
                }
            ],
            'score': 0,
            'rating':50
        },
        'referee':{
            'id': 'idceb',
            'name': {'first': 'Diego', 'last': 'Ceballos'},
            'keywords': null,
            'rating': 50
        }
    },

    getActions = function(){
        return actions;
    },

    getMatch = function(){
        return match;
    },

    setMatch = function(m){
        match = m;
    },

    setActions = function(as){
        actions = as;
    };

exports.getActions = getActions;
exports.getMatch = getMatch;
exports.setActions = setActions;
exports.setMatch = setMatch;