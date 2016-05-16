App.module('miHinchada.Views', function (Views, App, Backbone, Marionette, $, _) {

    Views.Main = Marionette.LayoutView.extend({

        className: 'main-layout',

        template: __templates.mihinchada.main,

        regions: {
            'headerRegion': '[data-js="header"]',
            'tabsRegion': '[data-js="tabs"]',
            'contentRegion': '[data-js="content"]'
        },

        onShow: function(options) {
            var headerItemView,
                tabsItemView,
                matchLayoutView;

            headerItemView = new Views.Header();
            this.headerRegion.show(headerItemView);

            tabsItemView = new Views.Tabs();
            this.tabsRegion.show(tabsItemView);

            matchLayoutView = new Views.Match();
            this.contentRegion.show(matchLayoutView);
        }
    });
});