App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Player = Marionette.ItemView.extend({

        tagName: 'li',

        className: 'player',

        template: __templates.mihinchada.player,

        ui: {
            // money: 'input[type="number"]',
            // name: 'input[type="text"]',
            // trash: '.icon-remove'
        },

        events: {
            // 'input @ui.money': 'moneyChange',
            // 'input @ui.name': 'nameChange',
            // 'touchstart @ui.trash': 'removePerson'
        },

        initialize: function() {
            console.log("player!!!!");
            // var that = this;

            // App.Events.on('person-message', function(peopleTotal) {
            //     that.refreshStatusMsg(peopleTotal);
            // });
        },

        // onRender: function() {
            // var that = this;

            // document.addEventListener("deviceready", function() {
            //     cordova.plugins.Focus.focus(that.ui.money);
            //     cordova.plugins.Focus.focus(that.ui.name);
            // }, false);
        // }
    });
});