App.module('miHinchada.Collections', function (Collections, App, Backbone, Marionette, $, _) {

    Collections.Players = Backbone.Collection.extend({

        model: App.miHinchada.Models.Player

    });

});