var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Player
 * =======
 */

var Player = new keystone.List('Player', {
    map: { name: 'name' }
});

Player.add({
    name: { type: Types.Name, required: true },
    photo: { type: Types.Url, label: 'Photo'},

    currentTeam: { type: Types.Relationship, ref: 'Team' },

    born: { type: Types.Date, label: 'Born'  },
    country: { type: Types.Text, label: 'Country' },
    keywords: { type: Types.Text, label: 'Comma separated keywords' }
});

Player.schema.methods.getKeywords = function() {
    if(this.keywords == '') return [];
    return this.keywords.split(",");
}


Player.defaultColumns = 'country,name';
Player.register();