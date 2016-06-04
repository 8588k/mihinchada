var keystone = require('keystone'),
    twitterService = require('../../services/twitterService.js'),
    matchService = require("../../services/matchService.js"),
    eventService = require("../../services/eventService.js"),
    testService = require("../../services/testService.js"),
    socketService = require("../../services/socketService.js"),
    Promise = require('bluebird'),
    _ = require('underscore');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    var locals = res.locals;
    var io = keystone.get('io');

    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'matchprocess';

    var mp = matchService.getMatchAsync(req.params.matchId); //'574955f6ca3e6d25a70019ff'
    var ep = testService.getActions();
    
    Promise.all([mp,ep]).then(function(results){
        var match = results[0],
            actions = results[1];

        if(match.status == 'in_progress') {
            matchService.listenMatchStream(match, actions)
        }

        io.on('connect', function(socket){
            console.log('--- User connected');
            socketService.joinInternalMatch(match, socket);
        });

        view.render(
            'matchstream', 
            {
                'layout': 'lte',
                'box':{
                    'title': 'lalalla',
                    'footer': 'lolololo',
                    'closeable': true,
                    'collapseable': true
                },
                'match': match,
                'twitter_streams': twitterService.getAllStreams(),
                'actions': actions
            }
        );

    }, function(err){
        console.log("============>",err,"<=============");
        res.sendStatus(404);
    })

};
