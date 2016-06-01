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
    status: { 
        type: Types.Select,
        default: 'pending', 
        index: true,
        options: [
            { value: 'pending', label: 'Pending' },
            { value: 'in_progress', label: 'In progress' },
            { value: 'finished', label: 'Finished' }
        ] 
    },
    competition: { type: Types.Relationship, ref: 'Competition', initial: true, required: true },
    startDate: { type: Types.Datetime },
    endDate: { type: Types.Datetime },
    teams: { type: Types.Relationship, ref: 'MatchTeam', many: true },
    referee: { type: Types.Relationship, ref: 'MatchReferee' },
    stadium: { type: String }
});


Match.defaultColumns = 'name, competition';
Match.register();