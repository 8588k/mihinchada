(function (win) {

    if (win.App) { return; }

    var App = new Marionette.Application();

    App.Events = _.extend({}, Backbone.Events);

    App.addRegions({
        'mainRegion': '#app'
    });

    App.on('start', function() {
        Backbone.history.start();
    });

    win.App = App;

    document.addEventListener("deviceready", function() {
        App.start();
        FastClick.attach(document.body);
    }, false);

    document.addEventListener("resume", function() {
        App.onResume();
    }, false);

}(window));