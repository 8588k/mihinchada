App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.FootballScore = Marionette.ItemView.extend({

        template: __templates.mihinchada.footballScore,

        templateHelpers: function() {
        	return this.options.match;
        },

        onShow: function() {}

    });
});