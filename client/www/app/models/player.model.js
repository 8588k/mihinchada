App.module('miHinchada.Models', function (Models, App, Backbone, Marionette, $, _) {
    
    Models.Player = Backbone.Model.extend({
        defaults: {
            'name': null,
            'last_name': null,
            'shirt_number': null,
            'playing_position': null,
            'keywords': [],
            'since_minute': null,
            'until_minute': null,
            'rating': null,
            'tags': [] //yellow_card,red_card,goal,captain
        },

        initialize: function() {
            var that = this;

            App.socket.on('player:' + this.get('id') + ':update:rating', function(newRating) {
                that.set('rating', newRating);
            });
        }
    });

});