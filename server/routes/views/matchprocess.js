var keystone = require('keystone');

var matchService = require("../../services/matchService.js");

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    var match;

    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'matchprocess';

    matchService.getMatchAsync('574955f6ca3e6d25a70019ff').then(function(m){


        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(m));
        //view.render('matchprocess');
    })

    
    //matchService.listenMatchStream(match, actions, duration);


};
