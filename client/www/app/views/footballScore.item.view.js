App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.FootballScore = Marionette.ItemView.extend({

        template: __templates.mihinchada.footballScore,

        ui: {
            'crest': '.score-crest-container'
        },

        events: {
            'click @ui.crest': 'showTeamModal'
        },

        showTeamModal: function(event) {
            event.preventDefault();
            var team = this.model.get(event.currentTarget.getAttribute('data-js'));

            App.miHinchada.Cache.modalBottomModel.set({
                'name': team.name
            });
            $('#modalBottom').openModal();
        }

    });
});