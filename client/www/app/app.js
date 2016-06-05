(function (win) {

    if (win.App) { return; }

    var App = new Marionette.Application();

    App.Events = _.extend({}, Backbone.Events);

    App.socket = io('localhost:3000');

    App.addRegions({
        'headerRegion': '[data-js="header-region"]',
        'mainRegion': '[data-js="main-region"]',
        'modalBottomRegion': '[data-js="modal-bottom"]'
    });

    App.on('start', function() {
        Backbone.history.start();
    });

    win.App = App;

    // document.addEventListener("deviceready", function() {
    $(function() {
        App.start();
        FastClick.attach(document.body);
        // Initialize header's collapse button
        $('.button-collapse').sideNav();
    });
    // }, false);

}(window));