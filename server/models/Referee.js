var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Referee
 * =======
 */

var Referee = new keystone.List('Referee', {
    map: { name: 'name' }
});

Referee.add({
    name: { type: Types.Name, required: true },
    photo: { type: Types.Url, label: 'Photo'},

    born: { type: Types.Date, label: 'Born'  },
    country: { type: Types.Text, label: 'Country' },
    keywords: { type: Types.Text, label: 'Comma separated keywords' }
});

Referee.schema.methods.getKeywords = function() {
    if(this.keywords == '') return [];
    return this.keywords.split(",");
}


Referee.defaultColumns = 'country,name';
Referee.register();