var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Competition Model
 * =================
 */

var Competition = new keystone.List('Competition', {
    map: { name: 'name' }
});


Competition.add({
    name: { type: String, required: true },
    badge: { type: String },
    sport: { type: Types.Select, options: [
        { value: 'football', label: 'Football' }
    ] },
    country_name: { type: String },
    country_flag: { type: String }
});


Competition.defaultColumns = 'name';
Competition.register();
