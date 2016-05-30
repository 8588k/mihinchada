App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Players = Marionette.CollectionView.extend({

        tagName: 'ul',

        className: 'players-row',

        childView: Views.Player

    });

});