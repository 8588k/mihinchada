App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Team = Marionette.LayoutView.extend({

        template: __templates.mihinchada.team,

        templateHelpers: function() {
            return {
                'team': this.options.team,
                'isHomeTeam': this.options.team_type === 'home'
            };
        },

        regions: {
            'goalkeeperRegion': '[data-js="goalkeeper"]',
            'defendersRegion': '[data-js="defenders"]',
            'midfieldersRegion': '[data-js="midfielders"]',
            'attackersRegion': '[data-js="attackers"]',
            // substitutes
            // manager
        },

        onShow: function() {
            console.log("* this.options.team -> ", this.options.team_type);
            var team = this.options.team,
                playersCollection,
                goalkeepers,
                goalkeepersCollectionView,
                defenders,
                defendersCollectionView,
                midfielders,
                midfieldersCollectionView,
                attackers,
                attackersCollectionView;

            playersCollection = new App.miHinchada.Collections.Players(team.players);

            goalkeepers = playersCollection.where({'playing_position': 'goalkeeper'});
            defenders = playersCollection.where({'playing_position': 'defender'});
            midfielders = playersCollection.where({'playing_position': 'midfielder'});
            attackers = playersCollection.where({'playing_position': 'attacker'});

            var goalkeepersCollection = new App.miHinchada.Collections.Players(goalkeepers);
            var defendersCollection = new App.miHinchada.Collections.Players(defenders);
            var midfieldersCollection = new App.miHinchada.Collections.Players(midfielders);
            var attackersCollection = new App.miHinchada.Collections.Players(attackers);

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

            attackersCollectionView = new Views.Players({
                collection: attackersCollection
            });
            this.attackersRegion.show(attackersCollectionView);
        }

    });
});