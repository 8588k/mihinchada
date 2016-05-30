var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Match
 * =======
 */

var Match = new keystone.List('Match', {
    map: { name: 'name' }
});

Match.add({
    name: { type: String, required: true },
    competition: { type: Types.Relationship, ref: 'Competition', initial: true, required: true },
    startDate: { type: Types.Datetime },
    endDate: { type: Types.Datetime },
    teams: { type: Types.Relationship, ref: 'MatchTeam', many: true },
    referee: { type: Types.Relationship, ref: 'MatchReferee' },
    stadium: { type: String }
});


Match.defaultColumns = 'name, competition';
Match.register();