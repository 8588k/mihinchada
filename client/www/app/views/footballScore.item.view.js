App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.FootballScore = Marionette.ItemView.extend({

        template: __templates.mihinchada.footballScore,

        ui: {
            'crest': '.score-crest'
        },

        events: {
            'click @ui.crest': 'showTeamModal'
        },

        showTeamModal: function(event) {
            event.preventDefault();
            $('#modalTeam').openModal();
        }

    });
});