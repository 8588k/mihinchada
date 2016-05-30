App.module('miHinchada', function (miHinchada, App, Backbone, Marionette, $, _) {
    var controller,
        adds,
        Router;

    Router = Marionette.AppRouter.extend({
        'appRoutes': {
            '': 'index'
            // TODO: Agregar rutas
        }
    });

    controller = {
        index: function() {
            var headerView,
                mainView;

            // headerView = new miHinchada.Views.Header();
            // App.headerRegion.show(headerView);

            mainView = new miHinchada.Views.FootballMatch();
            App.mainRegion.show(mainView);
        }
    };

    App.onStart = function() {
        new Router({
            controller: controller
        });
    };
});