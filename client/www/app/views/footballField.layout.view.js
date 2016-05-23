App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.FootballField = Marionette.LayoutView.extend({

        template: __templates.mihinchada.footballField,

        regions: {
            'teamHomeRegion': '[data-js="field-half-home"]',
            'teamAwayRegion': '[data-js="field-half-away"]'
            // referee
        },

        onShow: function(options) {
            console.log("field!");
            // var that = this,
            //     teamHomeCollectionView,
            //     teamAwayCollectionView;

            // teamHomeCollectionView = new Views.Team();
            // this.teamHomeRegion.show(teamHomeCollectionView);

            // teamAwayCollectionView = new Views.Team();
            // this.teamAwayRegion.show(teamAwayCollectionView);
        }
    });
});