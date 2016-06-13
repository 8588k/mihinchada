App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.ModalBottom = Marionette.ItemView.extend({

        template: __templates.mihinchada.modalBottom,

        ui: {
            'playerAction': '[data-js="player-action"]'
        },

        events: {
            'click @ui.playerAction': 'playerAction'
        },

        modelEvents: {
            'change': 'render'
        },

        playerAction: function() {
            console.log("player-action");
            console.log('this.model.get("id") -> ', this.model.get('id'));
            console.log('App.miHinchada.Cache.matchModel -> ', App.miHinchada.Cache.matchModel);
            console.log('action', this.model.get('action'));
            App.socket.emit('match:live:event', {
                date: new Date().getTime(),
                match: App.miHinchada.Cache.matchModel.attributes,
                resource: {
                    id: this.model.get('id')
                },
                action: this.model.get('action')
            });
        }

    });
});