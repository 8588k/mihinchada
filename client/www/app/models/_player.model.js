App.module('miHinchada.Models', function (Models, App, Backbone, Marionette, $, _) {
    
    Models.Player = Backbone.Model.extend({
        defaults: {
            'name': null,
            'lastName': null,
            'shirtNumber': null,
            'playingPosition': null
        }
    });

});