App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Player = Marionette.ItemView.extend({

        tagName: 'li',

        template: __templates.mihinchada.player,

        ui: {
            'playerPicture': '[data-js="player-picture"]',
            'playerInfo': '[data-js="player-info"]'
        },

        events: {
            'click @ui.playerPicture': 'showPlayerModal',
            'click @ui.playerInfo': 'showPlayerModal'
        },

        showPlayerModal: function(event) {
            event.preventDefault();
            var name = this.model.get('name');

            App.miHinchada.Cache.modalBottomModel.set({
                'name': name.first + ' ' + name.last
            });
            $('#modalBottom').openModal();
        }

    });

});