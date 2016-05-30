var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Manager
 * =======
 */

var Manager = new keystone.List('Manager', {
    map: { name: 'name' }
});

Manager.add({
    name: { type: Types.Name, required: true },
    photo: { type: Types.Url, label: 'Photo'},

    currentTeam: { type: Types.Relationship, ref: 'Team' },

    born: { type: Types.Date, label: 'Born'  },
    country: { type: Types.Text, label: 'Country' },
    keywords: { type: Types.Text, label: 'Comma separated keywords' }
});


Manager.schema.methods.getKeywords = function() {
    if(this.keywords == '') return [];
    return this.keywords.split(",");
}


Manager.defaultColumns = 'name';
Manager.register();


