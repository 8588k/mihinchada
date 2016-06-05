App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.ModalBottom = Marionette.ItemView.extend({

        template: __templates.mihinchada.modalBottom,

        modelEvents: {
            'change': 'render'
        },

    });
});