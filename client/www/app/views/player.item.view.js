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
                'name': name.first + ' ' + name.last,
                'id': this.model.get('id'),
                'action': {
                    id: "aplauso",
                    resource_type: "player",
                    points: 1,
                    name: "Aplausos",
                    keywords: [
                        "vamos",
                        "aguante",
                        "arriba",
                        "aupa",
                        "hala",
                        "vamo"
                    ]
                }
            });
            $('#modalBottom').openModal();
        },

        modelEvents:{
            change: 'render'
        }

    });

});