App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.FootballField = Marionette.LayoutView.extend({

        template: __templates.mihinchada.footballField,

        regions: {
            'teamHomeRegion': '[data-js="field-half-home"]',
            'teamAwayRegion': '[data-js="field-half-away"]',
            'outHomeRegion': '[data-js="out-home"]',
            'outAwayRegion': '[data-js="out-away"]',
            'refereeRegion': '[data-js="referee"]'
        },

        onShow: function(options) {
            var that = this,
                teamHomeView,
                teamAwayView,
                refereeModel = new App.miHinchada.Models.Referee(that.options.model.get('referee'));

            teamHomeView = new Views.Team({
                'team': that.options.model.get('team_home'),
                'team_type': 'home'
            });
            this.teamHomeRegion.show(teamHomeView);

            teamAwayView = new Views.Team({
                'team': that.options.model.get('team_away'),
                'team_type': 'away'
            });
            this.teamAwayRegion.show(teamAwayView);

            outHomeView = new Views.Out({
                'team': that.options.model.get('team_home'),
                'team_type': 'home'
            });
            this.outHomeRegion.show(outHomeView);

            outAwayView = new Views.Out({
                'team': that.options.model.get('team_away'),
                'team_type': 'away'
            });
            this.outAwayRegion.show(outAwayView);

            refereeView = new Views.Referee({
                'model': refereeModel
            });
            this.refereeRegion.show(refereeView);
        }
    });
});