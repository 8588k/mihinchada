var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Team
 * ====
 */

var Team = new keystone.List('Team', {
    map: { name: 'name' }
});

Team.add({
    name: { type: String, required: true },
    fullName: { type: String, required: true, initial: true },
    badge: { type: Types.Url },
    homeKit: { type: Types.Url },
    awayKit: { type: Types.Url },
    city: { type: Types.Text, label: 'City' },
    country: { type: Types.Text, label: 'Country' },
    keywords: { type: Types.Text, label: 'Comma separated keywords' }
});

Team.schema.methods.getKeywords = function() {
        if(this.keywords == '') return [];
    return this.keywords.split(",");
}

Team.defaultColumns = 'country,name';
Team.register();
