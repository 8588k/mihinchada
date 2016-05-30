App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Player = Marionette.ItemView.extend({

        tagName: 'li',

        template: __templates.mihinchada.player,

        ui: {
            'playerNumber': '.player-number-container',
            'playerName': '.player-name'
        },

        events: {
            'click @ui.playerNumber': 'showPlayerModal',
            'click @ui.playerName': 'showPlayerModal'
        },

        showPlayerModal: function(event) {
            event.preventDefault();
            $('#modalPlayer').openModal();
        }

    });

});