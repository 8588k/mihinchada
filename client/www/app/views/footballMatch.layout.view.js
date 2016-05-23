App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.FootballMatch = Marionette.LayoutView.extend({

        template: __templates.mihinchada.footballMatch,

        regions: {
            'scoreRegion': '[data-js="score-region"]',
            'fieldRegion': '[data-js="field-region"]'
        },

        onShow: function(options) {
            var that = this,
                scoreView,
                fieldView,
                matchModel;

            matchModel = new App.miHinchada.Models.Match();
            matchModel.fetch({
                'success': function(model, response, options) {
                    scoreView = new Views.FootballScore({
                        'match': model.get('match')
                    });
                    that.scoreRegion.show(scoreView);

                    fieldView = new Views.FootballField();
                    that.fieldRegion.show(fieldView);
                }
            });
        }
    });
});