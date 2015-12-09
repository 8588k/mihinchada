App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Main = Marionette.LayoutView.extend({

        className: 'field',

        template: __templates.mihinchada.match,

        regions: {
            'teamHomeRegion': '[data-js="field-half-home"]',
            'teamAwayRegion': '[data-js="field-half-away"]'
        },

        onShow: function(options) {
            var that = this,
                teamHomeCollectionView,
                teamAwayCollectionView;

            teamHomeCollectionView = new Views.Team();
            this.teamHomeRegion.show(teamHomeCollectionView);

            teamAwayCollectionView = new Views.Team();
            this.teamAwayRegion.show(teamAwayCollectionView);
        }
    });
});