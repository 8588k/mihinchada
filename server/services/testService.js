"use strict";

var _ = require('underscore'),
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
        'start_date': new Date(new Date().getTime() - 17*60000),
        'end_date': new Date(new Date().getTime() + 110*60000),
        'team_home': {
            'id': 'idarg',
            'name': 'Argentina',
            'keywords': null,
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
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idotamendi',
                    'name': {'first': 'Nicolás', 'last': 'Otamendi' },
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idfunesmori',
                    'name': {'first': 'Ramiro', 'last': 'Funes Mori' },
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idrojo',
                    'name': {'first': 'Marcos', 'last': 'Rojo' },
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idfernandez',
                    'name': {'first': 'Augusto', 'last': 'Fernández' },
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmascherano',
                    'name': {'first': 'Javier', 'last': 'Mascherano' },
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idbanega',
                    'name': {'first': 'Ever', 'last': 'Banega' },
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idgaitan',
                    'name': {'first': 'Nicolás', 'last': 'Gaitán' },
                    'keywords': ['@clint_dempsey'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'iddimaría',
                    'name': {'first': 'Ángel', 'last': 'Di María' },
                    'keywords': null,
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idhiguain',
                    'name': {'first': 'Gonzalo', 'last': 'Higuaín' },
                    'keywords': null,
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                }
            ],
            'score': 0,
            'rating':50
        },
        'team_away': {
            'id': 'idchile',
            'name': 'Chile',
            'keywords': null,
            'manager': {
                'id': 'idpizzi',
                'name': {'first':'Juan Antonio', 'last': 'Pizzi'},
                'keywords': null,
                'rating': 50
            },  
            'players': [
                {
                    'id': 'idbravo',
                    'name': {'first': 'Claudio', 'last': 'Bravo'},
                    'keywords': null,
                    'playing_position': 'goalkeeper',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idisla',
                    'name': {'first': 'Mauricio', 'last': 'Isla'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idczapata',
                    'name': {'first': 'Cristian', 'last': 'Zapata'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmedel',
                    'name': {'first': 'Gary', 'last': 'Medel'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idjara',
                    'name': {'first': 'Gonzalo', 'last': 'Jara'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmena',
                    'name': {'first': 'Eugenio', 'last': 'Mena'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'iddiaz',
                    'name': {'first': 'Gonzalo', 'last': 'Díaz'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idaranguiz',
                    'name': {'first': 'Charles', 'last': 'Aránguiz'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idvidal',
                    'name': {'first': 'Arturo', 'last': 'Vidal'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idsanches',
                    'name': {'first': 'Alexis', 'last': 'Sánchez'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idorellana',
                    'name': {'first': 'Fabián', 'last': 'Orellana'},
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