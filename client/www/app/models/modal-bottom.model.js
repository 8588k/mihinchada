App.module('miHinchada.Models', function (Models, App, Backbone, Marionette, $, _) {
    
    Models.ModalBottom = Backbone.Model.extend({
        defaults: {
            'name': null,
            'actions': null
        }
    });

});