App.module('miHinchada', function (miHinchada, App, Backbone, Marionette, $, _) {
    
    miHinchada.AdMob = Marionette.Object.extend({
        ids: {},

        lastShow: 0,

        betweenShowDifference: 1000 * 60 * 5,

        initialize: function(options){
            if( /(android)/i.test(navigator.userAgent) ) { 
                this.ids = { // for Android
                    // interstitial: 'ca-app-pub-5913386662735594/6263217463'
                };
            } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                this.ids = { // for iOS
                    // interstitial: 'ca-app-pub-6869992474017983/7563979554'
                };
            } else {
                this.ids = { // for Windows Phone
                    // interstitial: 'ca-app-pub-6869992474017983/1355127956'
                };
            }
        },

        showInterstitial: function(){
            var now = new Date().getTime();
            if((now - this.lastShow) > this.betweenShowDifference){
                AdMob.prepareInterstitial({
                    adId: this.ids.interstitial,
                    autoShow: true
                });

                this.lastShow = now;
            }
        }
    });
});