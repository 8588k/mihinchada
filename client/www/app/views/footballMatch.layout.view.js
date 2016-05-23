App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.FootballMatch = Marionette.LayoutView.extend({

        template: __templates.mihinchada.footballMatch,

        regions: {
            'scoreRegion': '[data-js="score-region"]',
            'fieldRegion': '[data-js="field-region"]'
        },

        onShow: function(options) {
            console.log("match!");
            var scoreView,
                fieldView;

            scoreView = new Views.FootballScore();
            this.scoreRegion.show(scoreView);

            fieldView = new Views.FootballField();
            this.fieldRegion.show(fieldView);
        }
    });
});