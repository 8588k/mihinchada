"use strict";

var _ = require('underscore'),
    moment = require('moment'),

    actions = [
        //=============================================
        //                    TEAM
        //=============================================

        {
            'id':'alentar',
            'resource_type':'team',
            'points': 1,
            'name': 'Alentar',
            'keywords': ['vamos','aguante','arriba','aupa','hala','vamo']
        },
        {
            'id':'abuchear',
            'resource_type':'team',
            'points': 1,
            'name': 'Abuchear',
            'keywords': ['horrible','anti futbol','horrendo','mal','sin ideas','triste']
        },


        //=============================================
        //                    PLAYER
        //=============================================
        {
            'id':'gol',
            'resource_type':'player',
            'points': 1,
            'name': 'Golazo',
            'keywords': ['gol','gool','goool','golazo']
        },
        {
            'id':'pase',
            'resource_type':'player',
            'points': 1,
            'name': 'Gran pase!',
            'keywords': ['pase','asistencia']
        },
        {
            'id':'quite',
            'resource_type':'player',
            'points': 2,
            'name': 'Gran quite!',
            'keywords': ['quite','recuperacion','recupero']
        },
        {
            'id':'aplauso',
            'resource_type':'player',
            'points': 2,
            'name': 'Aplausos!',
            'keywords': ['genio','maestro','mago','aplausos','magistral']
        },
        {
            'id':'silbar',
            'resource_type':'player',
            'points': 2,
            'name': 'Silbar!',
            'keywords': ['mal','horrible','anti futbol','horrendo','mal', 'pecho']
        },
        {
            'id':'amarilla',
            'resource_type':'player',
            'points': 2,
            'name': 'Es para amarilla!',
            'keywords': ['amarilla','amonestado','amonestacion']
        },
        {
            'id':'roja',
            'resource_type':'player',
            'points': 2,
            'name': 'Que lo echen!',
            'keywords': ['sucio','roja','expulsado']
        },

        //=============================================
        //                    MANAGER
        //=============================================

        {
            'id':'buencambio',
            'resource_type':'manager',
            'points': 1,
            'name': 'Buen cambio',
            'keywords': ['buen cambio','gran sustitucion','acerto con el cambio']
        },
        {
            'id':'malcambio',
            'resource_type':'manager',
            'points': 1,
            'name': 'Mal cambio',
            'keywords': ['mal cambio','no rindio el cambio']
        },

        //=============================================
        //                    REFEREE
        //=============================================

        {
            'id':'aplausos',
            'resource_type':'referee',
            'points': 1,
            'name': 'Aplausos',
            'keywords': ['bien','correcto']
        },
        {
            'id':'boo',
            'resource_type':'referee',
            'points': 1,
            'name': 'Abuchear',
            'keywords': ['mal','equivoco']
        },
    ],

    match = {
        'id': 'test_match',
        'status': 'in_progress',
        'start_date': new Date(new Date().getTime() - 0*60000),
        'end_date': new Date(new Date().getTime() + 110*60000),
        'team_home': {
            'id': 'idarg',
            'name': 'Argentina',
            'keywords': ['@afa'],
            'manager': {
                'id': 'idmartino',
                'name': {'first': 'Gerardo', 'last': 'Martino'},
                'keywords': null,
                'rating': 50
            },  
            'players': [
                {
                    'id': 'idromero',
                    'name': {'first': 'Sergio', 'last': 'Romero' },
                    'keywords': null,
                    'playing_position': 'goalkeeper',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmercado',
                    'name': {'first': 'Gabriel', 'last': 'Mercado' },
                    'keywords': ['@gabemadryn'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idotamendi',
                    'name': {'first': 'Nicolás', 'last': 'Otamendi' },
                    'keywords': ['@Notamendi30'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idfunesmori',
                    'name': {'first': 'Ramiro', 'last': 'Funes Mori' },
                    'keywords': ['@funesmoriofi25'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idrojo',
                    'name': {'first': 'Marcos', 'last': 'Rojo' },
                    'keywords': ['@marcosrojo5'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idfernandez',
                    'name': {'first': 'Augusto', 'last': 'Fernández' },
                    'keywords': ['@augusto12f'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmascherano',
                    'name': {'first': 'Javier', 'last': 'Mascherano' },
                    'keywords': ['@Mascherano'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idbanega',
                    'name': {'first': 'Ever', 'last': 'Banega' },
                    'keywords': ['@Ever10Banega'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idgaitan',
                    'name': {'first': 'Nicolás', 'last': 'Gaitán' },
                    'keywords': ['@NicoGaitan20'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'iddimaría',
                    'name': {'first': 'Ángel', 'last': 'Di María' },
                    'keywords': ['@AngeIDiMaria10'],
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idhiguain',
                    'name': {'first': 'Gonzalo', 'last': 'Higuaín' },
                    'keywords': ['@G_Higuain'],
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                }
            ],
            'score': 0,
            'rating':50
        },

        'team_away': {
            'id': 'idpanama',
            'name': 'Panama',
            'keywords': null,
            'manager': {
                'id': 'idgomez',
                'name': {'first':'Hernán Darío', 'last': 'Gómez'},
                'keywords': null,
                'rating': 50
            },  
            'players': [
                {
                    'id': 'idpenedo',
                    'name': {'first': 'Jaime', 'last': 'Penedo'},
                    'keywords': null,
                    'playing_position': 'goalkeeper',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmachado',
                    'name': {'first': 'Adolfo', 'last': 'Machado'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idbaloy',
                    'name': {'first': 'Felipe', 'last': 'Baloy'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idcummings',
                    'name': {'first': 'Harold', 'last': 'Cummings'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmiller',
                    'name': {'first': 'Roderick', 'last': 'Miller'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idcooper',
                    'name': {'first': 'Armando', 'last': 'Cooper'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idgomez',
                    'name': {'first': 'Gabriel', 'last': 'Gómez'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idgodoy',
                    'name': {'first': 'Aníbal', 'last': 'Godoy'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idQuintero',
                    'name': {'first': 'Alberto', 'last': 'Quintero'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idPimentel',
                    'name': {'first': 'Valentín', 'last': 'Pimentel'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idPérez',
                    'name': {'first': 'Blas', 'last': 'Pérez'},
                    'keywords': null,
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                }
            ],
            'score': 0,
            'rating':50
        },
        'referee':{
            'id': 'idfedorczuk',
            'name': {'first': 'Daniel', 'last': 'Fedorczuk'},
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