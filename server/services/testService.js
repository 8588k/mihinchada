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
            'points': -1,
            'name': 'Abuchear',
            'keywords': ['horrible','anti futbol','horrendo','mal','sin ideas','triste']
        },


        //=============================================
        //                    PLAYER
        //=============================================
        {
            'id':'gol',
            'resource_type':'player',
            'points': 10,
            'name': 'Golazo',
            'keywords': ['gol','golazo']
        },
        {
            'id':'pase',
            'resource_type':'player',
            'points': 5,
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
            'points': -10,
            'name': 'Silbar!',
            'keywords': ['mal','horrible','anti futbol','horrendo','malo', 'pecho','pelotudo','forro','morfon','basta de','burro']
        },
        {
            'id':'amarilla',
            'resource_type':'player',
            'points': -1,
            'name': 'Es para amarilla!',
            'keywords': ['amarilla','amonestado','amonestacion']
        },
        {
            'id':'roja',
            'resource_type':'player',
            'points': -2,
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
            'points': -1,
            'name': 'Mal cambio',
            'keywords': ['mal cambio','no rindio el cambio']
        },
        {
            'id':'aplauso',
            'resource_type':'manager',
            'points': 5,
            'name': 'Aplausos!',
            'keywords': ['genio','maestro','mago','aplausos','magistral']
        },
        {
            'id':'silbar',
            'resource_type':'manager',
            'points': -5,
            'name': 'Silbar!',
            'keywords': ['mal','horrible','anti futbol','horrendo','malo', 'pecho','pelotudo','forro','morfon','basta de','burro','erro']
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
            'points': -1,
            'name': 'Abuchear',
            'keywords': ['mal','equivoco','erro']
        }
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
                    'keywords': ['chiquito'],
                    'playing_position': 'goalkeeper',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmercado',
                    'name': {'first': 'Gabriel', 'last': 'Mercado' },
                    'keywords': ['@gabemadryn'],
                    'playing_position': null,//'defender',
                    'since_minute': null,
                    'rating': 50
                },
                {
                    'id': 'idroncaglia',
                    'name': {'first': 'Facundo', 'last': 'Roncaglia' },
                    'keywords': ['@facuroncaglia10'],
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
                    'playing_position': null,//'defender',
                    'since_minute': null,
                    'rating': 50
                },
                {
                    'id': 'idcuesta',
                    'name': {'first': 'Victor', 'last': 'Cuesta' },
                    'keywords': ['@victorcuesta7'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idfernandez',
                    'name': {'first': 'Augusto', 'last': 'Fernández' },
                    'keywords': ['@augusto12f'],
                    'playing_position': null,//'midfielder',
                    'since_minute': null,
                    'rating': 50
                },
                {
                    'id': 'idmascherano',
                    'name': {'first': 'Javier', 'last': 'Mascherano' },
                    'keywords': ['@Mascherano'],
                    'playing_position': null,//'midfielder',
                    'since_minute': null,
                    'rating': 50
                },
                {
                    'id': 'idkranevitter',
                    'name': {'first': 'Matías', 'last': 'Kranevitter' },
                    'keywords': ['colo'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idlamela',
                    'name': {'first': 'Erik', 'last': 'Lamela' },
                    'keywords': ['coco'],
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
                    'playing_position': null,//'attacker',
                    'since_minute': null,//0,
                    'rating': 50
                },
                {
                    'id': 'iddimaría',
                    'name': {'first': 'Ángel', 'last': 'Di María' },
                    'keywords': ['@AngeIDiMaria10'],
                    'playing_position': null,//'attacker',
                    'since_minute': null,
                    'rating': 50
                },
                {
                    'id': 'idhiguain',
                    'name': {'first': 'Gonzalo', 'last': 'Higuaín' },
                    'keywords': ['@G_Higuain'],
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idlavezzi',
                    'name': {'first': 'Ezequiel', 'last': 'Lavezzi' },
                    'keywords': null,
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idaguero',
                    'name': {'first': 'Sergio', 'last': 'Aguero' },
                    'keywords': ['kun'],
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmessi',
                    'name': {'first': 'Lionel', 'last': 'Messi' },
                    'keywords': null,
                    'playing_position': null,//'attacker',
                    'since_minute': null,
                    'rating': 50
                }
            ],
            'score': 0,
            'rating':50
        },

        'team_away': {
            'id': 'idbolivia',
            'name': 'Bolivia',
            'keywords': null,
            'manager': {
                'id': 'idbaldivieso',
                'name': {'first':'Julio César', 'last': 'Baldivieso'},
                'keywords': null,
                'rating': 50
            },  
            'players': [
                {
                    'id': 'idlampe',
                    'name': {'first': 'Carlos', 'last': 'Lampe'},
                    'keywords': null,
                    'playing_position': 'goalkeeper',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idzenteno',
                    'name': {'first': 'Edward', 'last': 'Zenteno'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmelean',
                    'name': {'first': 'Alejandro', 'last': 'Meleán'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idcabrera',
                    'name': {'first': 'Nelson', 'last': 'Cabrera'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idsaavedra',
                    'name': {'first': 'Erwin', 'last': 'Saavedra'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idazogue',
                    'name': {'first': 'Pedro', 'last': 'Azogue'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idcampos',
                    'name': {'first': 'Jhasmani', 'last': 'Campos'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idgutierrez',
                    'name': {'first': 'Luis', 'last': 'Gutiérrez'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idsmedberg',
                    'name': {'first': 'Martín', 'last': 'Smedberg'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idarce',
                    'name': {'first': 'Juan Carlos', 'last': 'Arce'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idduk',
                    'name': {'first': 'Yasmani', 'last': 'Duk'},
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
            'id': 'idcarrillo',
            'name': {'first': 'Víctor', 'last': 'Carrillo'},
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