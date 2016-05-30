var keystone = require('keystone');
var Types = keystone.Field.Types;
var _ = require('underscore');

/**
 * MatchPlayer
 * =======
 */

var MatchPlayer = new keystone.List('MatchPlayer', {
    map: { name: 'name' }
});

MatchPlayer.add({
    name: { type: Types.Name, required: true },
    player: { type: Types.Relationship, ref: 'Player', initial: true, required: true },
    playingPosition: { 
        type: Types.Select, 
        initial: true, 
        required: true,
        options: [
            { value: 'def', label: 'Defender' },
            { value: 'mid', label: 'Midfielder' },
            { value: 'att', label: 'Attacker' }
        ] 
    },
    sinceMinute: { type: Types.Number, label: 'Since minute'},
    untilMinute: { type: Types.Number, label: 'Until minute'},
    rating: { type: Types.Number, label: 'Rating', default: 50},
    tags: { type: Types.Text, label: 'Comma separated tags (optional "|$min")' }
});


MatchPlayer.schema.methods.getTags = function() {
    var map = {};
    _.each(this.tags.split(","), function(it, index, list){
        var tagMin = it.split("|"),
            tag = tagMin[0],
            min = 0;

        if(tagMin.length > 1) min = parseInt(tagMin[1]);

        map[tag] = min;
    });
    return map;
}

MatchPlayer.defaultColumns = 'name';
MatchPlayer.register();