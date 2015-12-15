App.module('miHinchada', function (miHinchada, App, Backbone, Marionette, $, _) {
    var controller,
        adds,
        Router;

    Router = Marionette.AppRouter.extend({
        'appRoutes': {
            '': 'index'
        }
    });

    controller = {
        index: function() {
            var mainLayoutView;

            mainLayoutView = new miHinchada.Views.Main();
            App.mainRegion.show(mainLayoutView);
        }
    };

    App.onStart = function() {
        new Router({
            controller: controller
        });

        // adds = new miHinchada.AdMob();
        // adds.showInterstitial();
    };

    App.onResume = function() {
        // adds.showInterstitial();
    };
});