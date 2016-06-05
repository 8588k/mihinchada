App.module('miHinchada', function (miHinchada, App, Backbone, Marionette, $, _) {
    var controller,
        adds,
        Router;

    miHinchada.Cache = {};

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

            App.socket.emit('subscribe:match', {
                match_id: 'id'
            });
        }
    };

    App.onStart = function() {
        new Router({
            controller: controller
        });


        miHinchada.Cache.modalBottomModel = new miHinchada.Models.ModalBottom();
        var modalBottomView = new  miHinchada.Views.ModalBottom({
                'model': miHinchada.Cache.modalBottomModel
            });
        App.modalBottomRegion.show(modalBottomView);
    };
});