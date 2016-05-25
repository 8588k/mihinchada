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

        onShow: function(options) {
            // var that = this,
            //     player, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11,
            //     teamCollection,
            //     goalkeepersCollection,
            //     goalkeepersCollectionView,
            //     defendersCollection,
            //     defendersCollectionView,
            //     midfieldersCollection,
            //     midfieldersCollectionView,
            //     forwardsCollection,
            //     forwardsCollectionView;

            // player = new App.miHinchada.Models.Player({ 'name': 'Nombre1', 'lastName': 'Apellido1', 'shirtNumber': '1', 'playingPosition': 'goalkeeper' });
            // player2 = new App.miHinchada.Models.Player({ 'name': 'Nombre2', 'lastName': 'Apellido2', 'shirtNumber': '2', 'playingPosition': 'defender' });
            // player3 = new App.miHinchada.Models.Player({ 'name': 'Nombre3', 'lastName': 'Apellido3', 'shirtNumber': '3', 'playingPosition': 'defender' });
            // player4 = new App.miHinchada.Models.Player({ 'name': 'Nombre4', 'lastName': 'Apellido4', 'shirtNumber': '4', 'playingPosition': 'defender' });
            // player5 = new App.miHinchada.Models.Player({ 'name': 'Nombre5', 'lastName': 'Apellido5', 'shirtNumber': '5', 'playingPosition': 'defender' });
            // player6 = new App.miHinchada.Models.Player({ 'name': 'Nombre6', 'lastName': 'Apellido6', 'shirtNumber': '6', 'playingPosition': 'midfielder' });
            // player7 = new App.miHinchada.Models.Player({ 'name': 'Nombre7', 'lastName': 'Apellido7', 'shirtNumber': '7', 'playingPosition': 'midfielder' });
            // player8 = new App.miHinchada.Models.Player({ 'name': 'Nombre8', 'lastName': 'Apellido8', 'shirtNumber': '8', 'playingPosition': 'midfielder' });
            // player9 = new App.miHinchada.Models.Player({ 'name': 'Nombre9', 'lastName': 'Apellido9', 'shirtNumber': '9', 'playingPosition': 'midfielder' });
            // player10 = new App.miHinchada.Models.Player({ 'name': 'Nombre10', 'lastName': 'Apellido10', 'shirtNumber': '10', 'playingPosition': 'forward' });
            // player11 = new App.miHinchada.Models.Player({ 'name': 'Nombre11', 'lastName': 'Apellido11', 'shirtNumber': '11', 'playingPosition': 'forward' });

            // teamCollection = new App.miHinchada.Collections.Team([player, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11]);

            // // clono la colección para poder filtrar después
            // goalkeepersCollection = this.getPlayersCollectionByPlayingPosition(teamCollection, 'goalkeeper');
            // defendersCollection = this.getPlayersCollectionByPlayingPosition(teamCollection, 'defender');
            // midfieldersCollection = this.getPlayersCollectionByPlayingPosition(teamCollection, 'midfielder');
            // forwardsCollection = this.getPlayersCollectionByPlayingPosition(teamCollection, 'forward');

            // window.teamCollection = teamCollection;
            // window.goalkeepersCollection = goalkeepersCollection;
            // window.defendersCollection = defendersCollection;
            // window.midfieldersCollection = midfieldersCollection;
            // window.forwardsCollection = forwardsCollection;
            // window.metodo = this.getPlayersCollectionByPlayingPosition;

            // goalkeepersCollectionView = new Views.Players({
            //     collection: goalkeepersCollection
            // });
            // this.goalkeeperRegion.show(goalkeepersCollectionView);

            // defendersCollectionView = new Views.Players({
            //     collection: defendersCollection
            // });
            // this.defendersRegion.show(defendersCollectionView);

            // midfieldersCollectionView = new Views.Players({
            //     collection: midfieldersCollection
            // });
            // this.midfieldersRegion.show(midfieldersCollectionView);

            // forwardsCollectionView = new Views.Players({
            //     collection: forwardsCollection
            // });
            // this.forwardsRegion.show(forwardsCollectionView);
        }

        // getPlayersCollectionByPlayingPosition: function(collection, playingPosition) {
        //     var clonedCollection = collection.clone();
        //     clonedCollection.reset(clonedCollection.filter(function(model) {
        //         return model.get('playingPosition') === playingPosition;
        //     }));
        //     return clonedCollection;
        // }
    });
});