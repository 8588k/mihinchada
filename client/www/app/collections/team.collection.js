App.module('miHinchada.Collections', function (Collections, App, Backbone, Marionette, $, _) {

    Collections.Team = Backbone.Collection.extend({
        model: App.miHinchada.Models.Player
    });

});