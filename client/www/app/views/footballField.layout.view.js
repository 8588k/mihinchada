App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.FootballField = Marionette.LayoutView.extend({

        template: __templates.mihinchada.footballField,

        regions: {
            'teamHomeRegion': '[data-js="field-half-home"]',
            'teamAwayRegion': '[data-js="field-half-away"]'
            // substitutes
            // managers
            // referee
        },

        onShow: function(options) {
            var that = this,
                teamHomeView,
                teamAwayView;

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
        }
    });
});