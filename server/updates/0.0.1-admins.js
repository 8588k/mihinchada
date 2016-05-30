/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{ 'name.first': 'Admin', 'name.last': 'User', 'email': 'alejandrobertolo@gmail.com', 'password': 'Pass1234!', 'isAdmin': true },
	],
};

/*
mongoexport --db mi-hinchada --collection competitions
{"_id":{"$oid":"5748c9f660562e2e86a00260"},"name":"champions","__v":0,"badge":"sdas","country_flag":"asd","country_name":"asd","sport":"football"}

mongoexport --db mi-hinchada --collection eventtypes
{"_id":{"$oid":"5749414d4c98d10e9edb7786"},"resourceType":"team","name":"goal","timeline":false,"taggable":false,"points":100,"__v":0,"emoji":"","keywords":"gol,golazo,goal"}
{"_id":{"$oid":"574946dd4c98d10e9edb7787"},"resourceType":"team","name":"cheer","timeline":false,"taggable":false,"points":1,"__v":0,"emoji":"","keywords":"vamos,aguante,aupa,arriba,visca,hala"}
{"_id":{"$oid":"57494939ca3e6d25a70019db"},"resourceType":"player","name":"applause","timeline":false,"taggable":false,"points":1,"__v":0,"emoji":"","keywords":"crack,applause,bravo,genio,maestro"}
{"_id":{"$oid":"574949acca3e6d25a70019dc"},"resourceType":"player","name":"assist","timeline":false,"taggable":false,"points":50,"__v":0,"emoji":"","keywords":"assist,asistencia,pase gol,habilitacion"}
{"_id":{"$oid":"574949fcca3e6d25a70019dd"},"resourceType":"player","name":"goal","timeline":false,"taggable":false,"points":1,"__v":0,"emoji":"","keywords":"gol,golazo,goal"}
{"_id":{"$oid":"57494a54ca3e6d25a70019de"},"resourceType":"player","name":"yellow_card","timeline":false,"taggable":false,"points":-20,"__v":0,"emoji":"","keywords":"amarilla,amonestado,amonestacion"}
{"_id":{"$oid":"57494a85ca3e6d25a70019df"},"resourceType":"player","name":"red_card","timeline":false,"taggable":false,"points":-100,"__v":0,"emoji":"","keywords":"red card,expulsado"}
{"_id":{"$oid":"57494adcca3e6d25a70019e0"},"resourceType":"player","name":"dribble","timeline":false,"taggable":false,"points":3,"__v":0,"emoji":"","keywords":"gambeta,gambeteo,dribble"}

mongoexport --db mi-hinchada --collection managers
{"_id":{"$oid":"57494bc8ca3e6d25a70019e1"},"name":{"last":"Simione","first":"Diego"},"__v":0,"country":"","keywords":"@Simeone,cholo","photo":"","currentTeam":{"$oid":"57494c56ca3e6d25a70019e2"}}
{"_id":{"$oid":"57494d59ca3e6d25a70019e4"},"name":{"last":"Zidane","first":"Zinedine"},"__v":0,"country":"Francia","currentTeam":{"$oid":"57494cf1ca3e6d25a70019e3"},"keywords":"Zizou","photo":""}

| abertolo@mac-abertolo-2 api (mobile) | => mongoexport --db mi-hinchada --collection matches
2016-05-28T05:54:29.577-0300    connected to: localhost
{"_id":{"$oid":"574955f6ca3e6d25a70019ff"},"competition":{"$oid":"5748c9f660562e2e86a00260"},"name":"Final","teams":[{"$oid":"57495508ca3e6d25a70019fd"},{"$oid":"574955aeca3e6d25a70019fe"}],"__v":1,"stadium":"San Siro","startDate":{"$date":"2016-05-28T22:45:00.000Z"},"endDate":{"$date":"2016-05-29T01:30:00.000Z"},"referee":{"$oid":"574954a3ca3e6d25a70019fa"}}
{"_id":{"$oid":"5749594cca3e6d25a7001a07"},"competition":{"$oid":"5748c9f660562e2e86a00260"},"name":"test","teams":[{"$oid":"574958f3ca3e6d25a7001a05"},{"$oid":"5749591eca3e6d25a7001a06"}],"__v":1,"endDate":{"$date":"2016-05-29T08:39:59.000Z"},"referee":{"$oid":"5749588bca3e6d25a7001a02"},"stadium":"estadio","startDate":{"$date":"2016-05-28T08:39:58.000Z"}}

 
| abertolo@mac-abertolo-2 api (mobile) | => mongoexport --db mi-hinchada --collection matchmanagers
2016-05-28T05:54:29.602-0300    connected to: localhost
{"_id":{"$oid":"574954b9ca3e6d25a70019fb"},"manager":{"$oid":"57494bc8ca3e6d25a70019e1"},"rating":50,"name":{"last":"","first":"Cholo"},"__v":0,"tags":""}
{"_id":{"$oid":"574954c6ca3e6d25a70019fc"},"manager":{"$oid":"57494d59ca3e6d25a70019e4"},"rating":50,"name":{"last":"","first":"Zizou"},"__v":0}
{"_id":{"$oid":"57495868ca3e6d25a7001a00"},"manager":{"$oid":"57494bc8ca3e6d25a70019e1"},"rating":50,"name":{"last":"s2","first":"d2"},"__v":0,"tags":""}
{"_id":{"$oid":"5749587aca3e6d25a7001a01"},"manager":{"$oid":"57494d59ca3e6d25a70019e4"},"rating":50,"name":{"last":"z2","first":"z2"},"__v":0}

 
| abertolo@mac-abertolo-2 api (mobile) | => mongoexport --db mi-hinchada --collection matchplayers
2016-05-28T05:54:29.627-0300    connected to: localhost
{"_id":{"$oid":"57495383ca3e6d25a70019f0"},"playingPosition":"att","player":{"$oid":"57495263ca3e6d25a70019ed"},"rating":50,"name":{"last":"Bale","first":"Gareth"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"574953b2ca3e6d25a70019f1"},"playingPosition":"att","player":{"$oid":"5749522eca3e6d25a70019ec"},"rating":50,"name":{"last":"Benzema","first":"Karim"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"574953d5ca3e6d25a70019f2"},"playingPosition":"mid","player":{"$oid":"5749511fca3e6d25a70019e9"},"rating":50,"name":{"last":"Fernandez","first":"Gabi"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"574953ecca3e6d25a70019f3"},"playingPosition":"att","player":{"$oid":"57494f6aca3e6d25a70019e6"},"rating":50,"name":{"last":"Griezmann","first":"Antoine"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"57495407ca3e6d25a70019f4"},"playingPosition":"mid","player":{"$oid":"57495346ca3e6d25a70019ef"},"rating":50,"name":{"last":"Kroos","first":"Toni"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"5749541fca3e6d25a70019f5"},"playingPosition":"mid","player":{"$oid":"574952dbca3e6d25a70019ee"},"rating":50,"name":{"last":"Modric","first":"Luka"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"5749543bca3e6d25a70019f6"},"playingPosition":"mid","player":{"$oid":"5749518aca3e6d25a70019ea"},"rating":50,"name":{"last":"","first":"Koke"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"57495453ca3e6d25a70019f7"},"playingPosition":"att","player":{"$oid":"574951d6ca3e6d25a70019eb"},"rating":50,"name":{"last":"ronaldo","first":"cristiano"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"57495465ca3e6d25a70019f8"},"playingPosition":"att","player":{"$oid":"57495028ca3e6d25a70019e7"},"rating":50,"name":{"last":"Torres","first":"Fernando"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"57495478ca3e6d25a70019f9"},"playingPosition":"mid","player":{"$oid":"574950b1ca3e6d25a70019e8"},"rating":50,"name":{"last":"","first":"Saul"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"574958b3ca3e6d25a7001a03"},"playingPosition":"att","player":{"$oid":"574951d6ca3e6d25a70019eb"},"rating":50,"name":{"last":"","first":"cr72"},"__v":0,"sinceMinute":0,"tags":""}
{"_id":{"$oid":"574958d4ca3e6d25a7001a04"},"playingPosition":"att","player":{"$oid":"57494f6aca3e6d25a70019e6"},"rating":50,"name":{"last":"g2","first":"a2"},"__v":0,"sinceMinute":0,"tags":""}

 
| abertolo@mac-abertolo-2 api (mobile) | => mongoexport --db mi-hinchada --collection matchreferees
2016-05-28T05:54:29.652-0300    connected to: localhost
{"_id":{"$oid":"574954a3ca3e6d25a70019fa"},"referee":{"$oid":"57494e8dca3e6d25a70019e5"},"rating":50,"name":{"last":"","first":"Mark"},"__v":0}
{"_id":{"$oid":"5749588bca3e6d25a7001a02"},"referee":{"$oid":"57494e8dca3e6d25a70019e5"},"rating":50,"name":{"last":"","first":"mark2"},"__v":0,"tags":""}

 
| abertolo@mac-abertolo-2 api (mobile) | => mongoexport --db mi-hinchada --collection matchteams
2016-05-28T05:54:29.675-0300    connected to: localhost
{"_id":{"$oid":"57495508ca3e6d25a70019fd"},"team":{"$oid":"57494cf1ca3e6d25a70019e3"},"location":"home","score":0,"rating":50,"players":[{"$oid":"57495383ca3e6d25a70019f0"},{"$oid":"57495453ca3e6d25a70019f7"},{"$oid":"574953b2ca3e6d25a70019f1"},{"$oid":"57495407ca3e6d25a70019f4"},{"$oid":"5749541fca3e6d25a70019f5"}],"__v":1,"manager":{"$oid":"574954c6ca3e6d25a70019fc"}}
{"_id":{"$oid":"574955aeca3e6d25a70019fe"},"team":{"$oid":"57494c56ca3e6d25a70019e2"},"location":"away","score":0,"rating":50,"players":[{"$oid":"5749543bca3e6d25a70019f6"},{"$oid":"57495478ca3e6d25a70019f9"},{"$oid":"574953ecca3e6d25a70019f3"},{"$oid":"57495465ca3e6d25a70019f8"},{"$oid":"574953d5ca3e6d25a70019f2"}],"__v":1,"manager":{"$oid":"574954b9ca3e6d25a70019fb"}}
{"_id":{"$oid":"574958f3ca3e6d25a7001a05"},"team":{"$oid":"57494c56ca3e6d25a70019e2"},"location":"home","score":0,"rating":50,"players":[{"$oid":"574958d4ca3e6d25a7001a04"}],"__v":1,"manager":{"$oid":"57495868ca3e6d25a7001a00"}}
{"_id":{"$oid":"5749591eca3e6d25a7001a06"},"team":{"$oid":"57494cf1ca3e6d25a70019e3"},"location":"away","score":0,"rating":50,"players":[{"$oid":"574958b3ca3e6d25a7001a03"}],"__v":1,"manager":{"$oid":"5749587aca3e6d25a7001a01"}}

 
| abertolo@mac-abertolo-2 api (mobile) | => mongoexport --db mi-hinchada --collection players
2016-05-28T05:54:29.706-0300    connected to: localhost
{"_id":{"$oid":"57494f6aca3e6d25a70019e6"},"name":{"last":"Griezmann","first":"Antoine"},"__v":0,"country":"France","currentTeam":{"$oid":"57494c56ca3e6d25a70019e2"},"keywords":"@AntoGriezmann","photo":""}
{"_id":{"$oid":"57495028ca3e6d25a70019e7"},"name":{"last":"Torres","first":"Fernando"},"__v":0,"country":"España","currentTeam":{"$oid":"57494c56ca3e6d25a70019e2"},"keywords":"niño","photo":""}
{"_id":{"$oid":"574950b1ca3e6d25a70019e8"},"name":{"last":"Ñiguez Esclapez","first":"Saúl"},"__v":0,"country":"España","currentTeam":{"$oid":"57494c56ca3e6d25a70019e2"},"keywords":"saul,@saulniguez","photo":""}
{"_id":{"$oid":"5749511fca3e6d25a70019e9"},"name":{"last":"Fernández Arenas","first":"Gabriel"},"__v":0,"country":"España","currentTeam":{"$oid":"57494c56ca3e6d25a70019e2"},"keywords":"gabi","photo":""}
{"_id":{"$oid":"5749518aca3e6d25a70019ea"},"name":{"last":"Resurrección Merodio","first":"Jorge"},"__v":0,"country":"España","currentTeam":{"$oid":"57494c56ca3e6d25a70019e2"},"keywords":"koke,@Koke6","photo":""}
{"_id":{"$oid":"574951d6ca3e6d25a70019eb"},"name":{"last":"Ronaldo","first":"Cristiano"},"__v":0,"country":"Portugal","currentTeam":{"$oid":"57494cf1ca3e6d25a70019e3"},"keywords":"cr7,@Cristiano","photo":""}
{"_id":{"$oid":"5749522eca3e6d25a70019ec"},"name":{"last":"Benzema","first":"Karim"},"__v":0,"country":"Francia","currentTeam":{"$oid":"57494cf1ca3e6d25a70019e3"},"keywords":"@Benzema,gato","photo":""}
{"_id":{"$oid":"57495263ca3e6d25a70019ed"},"name":{"last":"Bale","first":"Gareth"},"__v":0,"country":"Welsh","currentTeam":{"$oid":"57494cf1ca3e6d25a70019e3"},"keywords":"@GarethBale11","photo":""}
{"_id":{"$oid":"574952dbca3e6d25a70019ee"},"name":{"last":"Modrić","first":"Luka"},"__v":0,"country":"Croatia","currentTeam":{"$oid":"57494cf1ca3e6d25a70019e3"},"keywords":"","photo":""}
{"_id":{"$oid":"57495346ca3e6d25a70019ef"},"name":{"last":"Kroos","first":"Toni"},"__v":0,"country":"Germany","currentTeam":{"$oid":"57494cf1ca3e6d25a70019e3"},"keywords":"@ToniKroos","photo":""}

 
| abertolo@mac-abertolo-2 api (mobile) | => mongoexport --db mi-hinchada --collection referees
2016-05-28T05:54:29.737-0300    connected to: localhost
{"_id":{"$oid":"57494e8dca3e6d25a70019e5"},"name":{"last":"Clattenburg","first":"Mark"},"__v":0,"country":"England","keywords":"","photo":""}

 
| abertolo@mac-abertolo-2 api (mobile) | => mongoexport --db mi-hinchada --collection teams
2016-05-28T05:54:32.159-0300    connected to: localhost
{"_id":{"$oid":"57494c56ca3e6d25a70019e2"},"full_name":"Club Atlético de Madrid","name":"Atleti","__v":0,"away_kit":"","badge":"","city":"","country":"España","home_kit":"","keywords":"Atlético,@Atleti,ATM,NuncaDejesDeCreer"}
{"_id":{"$oid":"57494cf1ca3e6d25a70019e3"},"full_name":"Real Madrid Club de Fútbol","name":"Real Madrid","__v":0,"away_kit":"","badge":"","city":"","country":"España","home_kit":"","keywords":"vikingos,@realmadrid,APorLaUndecima"}


// This is the long-hand version of the functionality above:

var keystone = require('keystone');
var async = require('async');
var User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin (admin, done) {

	var newAdmin = new User.model(admin);

	newAdmin.isAdmin = true;
	newAdmin.save(function (err) {
		if (err) {
			console.error('Error adding admin ' + admin.email + ' to the database:');
			console.error(err);
		} else {
			console.log('Added admin ' + admin.email + ' to the database.');
		}
		done(err);
	});

}

exports = module.exports = function (done) {
	async.forEach(admins, createAdmin, done);
};

*/
