App.module('miHinchada.Models', function (Models, App, Backbone, Marionette, $, _) {
    
    Models.Match = Backbone.Model.extend({
        defaults: {
            'date': null,
            'teamHome': null,
            'teamAway': null,
            'referee': null
        }
    });
});