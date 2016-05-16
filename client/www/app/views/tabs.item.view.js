App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {    
    
    Views.Tabs = Marionette.ItemView.extend({

        tagName: 'ul',

        template: __templates.mihinchada.tabs,

        // ui: {
        //     share: '[data-js="share"]',
        //     reset: '[data-js="reset"]'
        // },

        // events: {
        //     'touchstart @ui.options': 'showOptions',
        //     'touchstart @ui.share': 'share',
        //     'touchstart @ui.reset': 'reset'
        // },

        // onShow: function() {
            // $('.dropdown-button').dropdown({
            //     inDuration: 300,
            //     outDuration: 225,
            //     constrain_width: false, // Does not change width of dropdown to that of the activator
            //     hover: false, // Activate on hover
            //     gutter: 0, // Spacing from edge
            //     belowOrigin: true, // Displays dropdown below the button
            //     alignment: 'left' // Displays dropdown with edge aligned to the left of button
            // });
        // },

        // share: function(event){
        //     App.share();
        // },

        // reset: function(event){
        //     Backbone.history.navigate('reset', {trigger:true});
        // }
    });
});