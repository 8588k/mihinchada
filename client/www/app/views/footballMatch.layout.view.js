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

            matchModel = new App.miHinchada.Models.Match({id: 'test_match'});
            App.miHinchada.Cache.matchModel = matchModel;
            matchModel.fetch({
                // 'dataType': 'jsonp',
                'success': function(model, response, options) {
                    scoreView = new Views.FootballScore({
                        'model': model
                    });
                    that.scoreRegion.show(scoreView);

                    fieldView = new Views.FootballField({
                        'model': model
                    });
                    that.fieldRegion.show(fieldView);
console.log("MODEL ", model.get('id'));
                    App.socket.emit('match:subscribe', {
                        'data': {
                            'match': {
                                'id': model.get('id')
                            }
                        }
                    });
                }
            });
        }
    });
});