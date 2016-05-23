App.module('miHinchada.Models', function (Models, App, Backbone, Marionette, $, _) {
    
    Models.Team = Backbone.Model.extend({
        defaults: {
            'name': null,
            'manager': null,
            'players': null
        }
    });
});