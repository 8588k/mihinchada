var keystone = require('keystone');
var Types = keystone.Field.Types;
var _ = require('underscore');

/**
 * MatchReferee
 * =======
 */

var MatchReferee = new keystone.List('MatchReferee', {
    map: { name: 'name' }
});

MatchReferee.add({
    name: { type: Types.Name, required: true },
    referee: { type: Types.Relationship, ref: 'Referee', initial: true, required: true },
    rating: { type: Types.Number, label: 'Rating', default: 50},
    tags: { type: Types.Text, label: 'Comma separated tags (optional "|$min")' }
});


MatchReferee.schema.methods.getTags = function() {
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

MatchReferee.defaultColumns = 'name';
MatchReferee.register();