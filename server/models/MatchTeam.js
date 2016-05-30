var keystone = require('keystone');
var Types = keystone.Field.Types;
var _ = require('underscore');

/**
 * MatchTeam
 * =======
 */

var MatchTeam = new keystone.List('MatchTeam', {
    map: { location: 'location' }
});

MatchTeam.add({
    location: { 
        type: Types.Select, 
        initial: true, 
        required: true,
        options: [
            { value: 'home', label: 'Home' },
            { value: 'away', label: 'Away' }
        ] 
    },
    team: { type: Types.Relationship, ref: 'Team', initial: true, required: true },
    players: { type: Types.Relationship, ref: 'MatchPlayer', many: true },
    manager: { type: Types.Relationship, ref: 'MatchManager' },
    rating: { type: Types.Number, label: 'Rating', default: 50},
    score: { type: Types.Number, label: 'Score', default: 0}
});


MatchTeam.defaultColumns = 'location';
MatchTeam.register();