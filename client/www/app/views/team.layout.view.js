App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Team = Marionette.LayoutView.extend({

        template: __templates.mihinchada.team,

        templateHelpers: function() {
            return this.options.team;
        },

        regions: {
            'goalkeeperRegion': '[data-js="goalkeeper"]',
            'defendersRegion': '[data-js="defenders"]',
            'midfieldersRegion': '[data-js="midfielders"]',
            'forwardsRegion': '[data-js="forwards"]',
            // substitutes
            // manager
        },

        onShow: function() {
            var team = this.options.team,
                playersCollection,
                goalkeepers,
                goalkeepersCollectionView,
                defenders,
                defendersCollectionView,
                midfielders,
                midfieldersCollectionView,
                forwards,
                forwardsCollectionView;

            playersCollection = new App.miHinchada.Collections.Players(team.players);

            goalkeepers = playersCollection.where({'playing_position': 'goalkeeper'});
            defenders = playersCollection.where({'playing_position': 'defender'});
            midfielders = playersCollection.where({'playing_position': 'midfielder'});
            forwards = playersCollection.where({'playing_position': 'forward'});


            var goalkeepersCollection = new App.miHinchada.Collections.Players(goalkeepers);
            var defendersCollection = new App.miHinchada.Collections.Players(defenders);
            var midfieldersCollection = new App.miHinchada.Collections.Players(midfielders);
            var forwardsCollection = new App.miHinchada.Collections.Players(forwards);

            goalkeepersCollectionView = new Views.Players({
                collection: goalkeepersCollection
            });
            this.goalkeeperRegion.show(goalkeepersCollectionView);

            defendersCollectionView = new Views.Players({
                collection: defendersCollection
            });
            this.defendersRegion.show(defendersCollectionView);

            midfieldersCollectionView = new Views.Players({
                collection: midfieldersCollection
            });
            this.midfieldersRegion.show(midfieldersCollectionView);

            forwardsCollectionView = new Views.Players({
                collection: forwardsCollection
            });
            this.forwardsRegion.show(forwardsCollectionView);
        }

    });
});