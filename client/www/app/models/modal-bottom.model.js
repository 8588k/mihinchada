App.module('miHinchada.Models', function (Models, App, Backbone, Marionette, $, _) {
    
    Models.ModalBottom = Backbone.Model.extend({
        defaults: {
            'name': null,
            'actions': [
                '¡Golazo!',
                'Gran Pase',
                // 'Buen quite',
                'Que lo echen',
                'Es para amarilla',
                'Aplaudir',
                'silbar'
            ]
        }
    });

});