var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Event Type (AKA Action)
 * =======================
 */

var EventType = new keystone.List('EventType', {
    map: { resource: 'resourceType', name: 'name' }
});


EventType.add({
    name: { type: String, required: true },
    resourceType: { 
        type: Types.Select, 
        initial: true, 
        required: true, 
        options: [
            { value: 'player', label: 'Player' },
            { value: 'referee', label: 'Referee' },
            { value: 'team', label: 'Team' },
            { value: 'manager', label: 'Manager' }
        ] 
    },
    points: { type: Types.Number, label: 'Points', default: 1 },
    //indica si tiene q agregarse como tag al resourc Ej: Goal
    taggable: { type: Types.Boolean, default: false }, 
    //indica si tiene q figurar en la linea de tiempo
    timeline: { type: Types.Boolean, default: false }, 
    keywords: { type: Types.Text, label: 'Comma separated keywords' },
    emoji: { type: Types.Url }
});

EventType.schema.methods.getKeywords = function() {
    if(this.keywords == '') return [];
    return this.keywords.split(",");
}

EventType.defaultColumns = 'resourceType,name';
EventType.register();
