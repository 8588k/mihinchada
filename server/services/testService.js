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
        'start_date': new Date(new Date().getTime() - 0*60000),
        'end_date': new Date(new Date().getTime() + 110*60000),
        'team_home': {
            'id': 'idusa',
            'name': 'Estados Unidos',
            'keywords': ['USA', '@ussoccer', 'stars and stripes'],
            'manager': {
                'id': 'idklinsman',
                'name': {'first': 'Jürgen', 'last': 'Klinsmann'},
                'keywords': null,
                'rating': 50
            },  
            'players': [
                {
                    'id': 'idbguzan',
                    'name': {'first': 'Brad', 'last': 'Guzan' },
                    'keywords': ['@bguzan'],
                    'playing_position': 'goalkeeper',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmorozco',
                    'name': {'first': 'Michael', 'last': 'Orozco' },
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idgcameron',
                    'name': {'first': 'Geoff', 'last': 'Cameron' },
                    'keywords': ['@GeoffCameron'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idjbrooks',
                    'name': {'first': 'John', 'last': 'Brooks' },
                    'keywords': ['@j_brooks25'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmbesler',
                    'name': {'first': 'Matt', 'last': 'Besler' },
                    'keywords': ['@MattBesler'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idabedoya',
                    'name': {'first': 'Alejandro', 'last': 'Bedoya' },
                    'keywords': ['@AleBedoya17'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idmbradley',
                    'name': {'first': 'Michael', 'last': 'Bradley' },
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idjjones',
                    'name': {'first': 'Jermaine', 'last': 'Jones' },
                    'keywords': ['@Jermainejunior'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idcdempsey',
                    'name': {'first': 'Clint', 'last': 'Dempsey' },
                    'keywords': ['@clint_dempsey'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idbwood',
                    'name': {'first': 'Bobby', 'last': 'Wood' },
                    'keywords': null,
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idgzardes',
                    'name': {'first': 'Gyasi', 'last': 'Zardes' },
                    'keywords': ['@gyasinho'],
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                }
            ],
            'score': 0,
            'rating':50
        },
        'team_away': {
            'id': 'idcolombia',
            'name': 'Colombia',
            'keywords': ['cafeteros','Tricolor','COL'],
            'manager': {
                'id': 'idjpekerman',
                'name': {'first':'José', 'last': 'Pekerman'},
                'keywords': ['profe'],
                'rating': 50
            },  
            'players': [
                {
                    'id': 'iddospina',
                    'name': {'first': 'David', 'last': 'Ospina'},
                    'keywords': ['@D_Ospina1'],
                    'playing_position': 'goalkeeper',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idsarias',
                    'name': {'first': 'Santiago', 'last': 'Arias'},
                    'keywords': ['@santiagoarias13'],
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
                    'id': 'idjmurillo',
                    'name': {'first': 'Jeison', 'last': 'Murillo'},
                    'keywords': ['@JeisonMurillo19'],
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idfdiaz',
                    'name': {'first': 'Farid', 'last': 'Díaz'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idsperez',
                    'name': {'first': 'Sebastián', 'last': 'Pérez'},
                    'keywords': null,
                    'playing_position': 'defender',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'iddtorres',
                    'name': {'first': 'Daniel', 'last': 'Torres'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idecardona',
                    'name': {'first': 'Edwin', 'last': 'Cardona'},
                    'keywords': ['@EdwinCardonaCF'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idjgcuadrado',
                    'name': {'first': 'Juan Guillermo', 'last': 'Cuadrado'},
                    'keywords': null,
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idjrodriguez',
                    'name': {'first': 'James', 'last': 'Rodríguez'},
                    'keywords': ['@jamesdrodriguez'],
                    'playing_position': 'midfielder',
                    'since_minute': 0,
                    'rating': 50
                },
                {
                    'id': 'idcbacca',
                    'name': {'first': 'Carlos', 'last': 'Bacca'},
                    'keywords': ['@carlos7bacca'],
                    'playing_position': 'attacker',
                    'since_minute': 0,
                    'rating': 50
                }
            ],
            'score': 0,
            'rating':50
        },
        'referee':{
            'id': 'idrgarcia',
            'name': {'first': 'Roberto', 'last': 'García'},
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