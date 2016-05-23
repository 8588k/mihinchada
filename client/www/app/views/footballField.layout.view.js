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
            var teamHomeView,
                teamAwayView;

            teamHomeView = new Views.Team();
            this.teamHomeRegion.show(teamHomeView);

            teamAwayView = new Views.Team();
            this.teamAwayRegion.show(teamAwayView);
        }
    });
});