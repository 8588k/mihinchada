this["__templates"] = this["__templates"] || {};
this["__templates"]["mihinchada"] = this["__templates"]["mihinchada"] || {};
this["__templates"]["mihinchada"]["footballField"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"field\">\n    <div class=\"left-corner-home\"></div>\n    <div class=\"right-corner-home\"></div>\n    <div class=\"field-half field-half-home\" data-js=\"field-half-home\"></div>\n\n    <div class=\"field-half field-half-away\" data-js=\"field-half-away\"></div>\n    <div class=\"left-corner-away\"></div>\n    <div class=\"right-corner-away\"></div>\n</div>";
},"useData":true});
this["__templates"]["mihinchada"]["footballMatch"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"score-container\" data-js=\"score-region\">Score Region</div>\n<div class=\"field-container\" data-js=\"field-region\">Field Region</div>";
},"useData":true});
this["__templates"]["mihinchada"]["footballScore"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"score-crest\">\n    <img src=\"./app/imgs/escudo_river.png\" width=\"35\" height=\"35\">\n</div>\n\n<div class=\"score\">\n    <div class=\"score-result\">\n        <span class=\"score-home\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.team_home : depth0)) != null ? stack1.goals : stack1)) != null ? stack1.length : stack1), depth0))
    + "</span>\n        -\n        <span class=\"score-away\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.team_away : depth0)) != null ? stack1.goals : stack1)) != null ? stack1.length : stack1), depth0))
    + "</span>\n    </div>\n    <div class=\"score-info\">\n        <span class=\"score-time\">15:47</span>\n        <span class=\"score-period\">ST</span>\n    </div>\n</div>\n\n<div class=\"score-crest\">\n    <img src=\"./app/imgs/escudo_boca.png\" width=\"35\" height=\"35\">\n</div>\n\n<div id=\"modalTeam\" class=\"modal bottom-sheet\">\n    <div class=\"modal-content\">\n        <ul class=\"collection with-header\">\n            <li class=\"collection-header\">\n                <h4>Equipo</h4>\n            </li>\n            <li class=\"collection-item\">\n                <div>\n                    Alentar<a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">send</i></a>\n                </div>\n            </li>\n            <li class=\"collection-item\">\n                <div>\n                    Aplaudir<a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">send</i></a>\n                </div>\n            </li>\n            <li class=\"collection-item\">\n                <div>\n                    Abuchear<a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">send</i></a>\n                </div>\n            </li>\n      </ul>\n    </div>\n</div>";
},"useData":true});
this["__templates"]["mihinchada"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "HEADER";
},"useData":true});
this["__templates"]["mihinchada"]["player"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<a href=\"#modalPlayer\" data-js=\"player\">\n    <div class=\"player-number-container\">"
    + alias3(((helper = (helper = helpers.shirt_number || (depth0 != null ? depth0.shirt_number : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shirt_number","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"player-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n</a>\n\n<div id=\"modalPlayer\" class=\"modal bottom-sheet\">\n    <div class=\"modal-content\">\n        <ul class=\"collection with-header\">\n            <li class=\"collection-header\">\n                <h4>Jugador</h4>\n            </li>\n            <li class=\"collection-item\">\n                <div>\n                    Gol<a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">send</i></a>\n                </div>\n            </li>\n            <li class=\"collection-item\">\n                <div>\n                    Offside<a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">send</i></a>\n                </div>\n            </li>\n            <li class=\"collection-item\">\n                <div>\n                    Tarjeta amarilla<a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">send</i></a>\n                </div>\n            </li>\n            <li class=\"collection-item\">\n                <div>\n                    Tarjeta roja<a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">send</i></a>\n                </div>\n            </li>\n      </ul>\n    </div>\n</div>";
},"useData":true});
this["__templates"]["mihinchada"]["tabs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<li>Inicio</li>\n<li>Partidos</li>\n<li>Chat</li>";
},"useData":true});
this["__templates"]["mihinchada"]["team"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"goalkeeper-row\" data-js=\"goalkeeper\">GOALKEEPER</div>\n<div class=\"defenders-row\" data-js=\"defenders\">DEFENDERS</div>\n<div class=\"midfielders-row\" data-js=\"midfielders\">MIDFIELDERS</div>\n<div class=\"forwards-row\" data-js=\"forwards\">FORWARDS</div>";
},"useData":true});