(function (win) {

    if (win.App) { return; }

    var App = new Marionette.Application();

    App.Events = _.extend({}, Backbone.Events);

    App.addRegions({
        'headerRegion': '[data-js="header-region"]',
        'mainRegion': '[data-js="main-region"]'
    });

    App.on('start', function() {
        Backbone.history.start();
    });

    win.App = App;

    // document.addEventListener("deviceready", function() {
    $(function() {
        App.start();
        FastClick.attach(document.body);
    });
    // }, false);

}(window));