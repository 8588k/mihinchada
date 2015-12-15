App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Main = Marionette.LayoutView.extend({

        template: __templates.mihinchada.main,

        regions: {
            'contentRegion': '[data-js="content"]'
        },

        events: {},

        onShow: function(options) {
            var that = this,
                match;

            matchLayoutView = new Views.Match();
            this.contentRegion.show(matchLayoutView);
        }
    });
});