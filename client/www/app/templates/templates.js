this["__templates"] = this["__templates"] || {};
this["__templates"]["mihinchada"] = this["__templates"]["mihinchada"] || {};
this["__templates"]["mihinchada"]["footballField"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class='football-pitch-half-home'>\n    <div class=\"football-pitch-corner-home\"></div>\n    <div class=\"football-pitch-big-area-home\">\n        <div class=\"football-pitch-small-area-home\"></div>\n    </div>  \n    <div class=\"players\" data-js=\"field-half-home\"></div>\n</div>\n<div class='football-pitch-half-away'>\n    <div class=\"football-pitch-corner-away\"></div>\n    <div class=\"football-pitch-big-area-away\">\n        <div class=\"football-pitch-small-area-away\"></div>\n    </div>\n    <div class=\"players\" data-js=\"field-half-away\"></div>\n</div>\n\n<div class=\"football-pitch-out\">\n    <div class=\"out-home\" data-js=\"out-home\"></div>\n    <div class=\"referee\" data-js=\"referee\"></div>\n    <div class=\"out-away\" data-js=\"out-away\"></div>\n</div>";
},"useData":true});
this["__templates"]["mihinchada"]["footballMatch"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"score-container\" data-js=\"score-region\">Score Region</div>\n<div class=\"football-pitch\" data-js=\"field-region\"></div>";
},"useData":true});
this["__templates"]["mihinchada"]["footballScore"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"score-crest-container\" data-js=\"team_home\">\n    <div class=\"score-crest\">\n        <img src=\"./app/imgs/escudo_river.png\" width=\"35\" height=\"35\">\n    </div>\n</div>\n\n<div class=\"score\">\n    <div class=\"score-result\">\n        <span class=\"score-home\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.team_home : depth0)) != null ? stack1.score : stack1), depth0))
    + "</span>\n        -\n        <span class=\"score-away\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.team_away : depth0)) != null ? stack1.score : stack1), depth0))
    + "</span>\n    </div>\n    <div class=\"score-info\">\n        <span class=\"score-time\">15:47</span>\n        <span class=\"score-period\">ST</span>\n    </div>\n</div>\n\n<div class=\"score-crest-container\" data-js=\"team_away\">\n    <div class=\"score-crest\">\n        <img src=\"./app/imgs/escudo_boca.png\" width=\"35\" height=\"35\">\n    </div>\n</div>";
},"useData":true});
this["__templates"]["mihinchada"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "HEADER";
},"useData":true});
this["__templates"]["mihinchada"]["manager"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<div class=\"progress-circular-container\">\n    <div class=\"progress-circular\" data-js=\"player-progress\">\n        <div class=\"c100 p"
    + alias1(((helper = (helper = helpers.promedio || (depth0 != null ? depth0.promedio : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"promedio","hash":{},"data":data}) : helper)))
    + " big\">\n            <span>DT</span>\n            <div class=\"slice\">\n                <div class=\"bar\"></div>\n                <div class=\"fill\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<a data-js=\"player-info\">\n    <div class=\"manager-name\">"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.last : stack1), depth0))
    + "</div>\n</a>";
},"useData":true});
this["__templates"]["mihinchada"]["modalBottom"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "            <li class=\"collection-item\">\n                <div data-js=\"player-action\">\n                    "
    + this.escapeExpression(this.lambda(depth0, depth0))
    + "\n                </div>\n            </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"modal-content\">\n    <ul class=\"collection with-header\">\n        <li class=\"collection-header\">\n            <img src=\"./app/imgs/messias.png\" width=\"100\" height=\"100\">\n            <h4>"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n        </li>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.actions : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>";
},"useData":true});
this["__templates"]["mihinchada"]["out"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <div class=\"substitutes\" data-js=\"substitutes\">\n        <div class=\"bench\">\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n        </div>\n    </div>\n    <div class=\"manager\" data-js=\"manager\"></div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "    <div class=\"manager\" data-js=\"manager\"></div>\n    <div class=\"substitutes\" data-js=\"substitutes\">\n        <div class=\"bench\">\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n            <div class=\"bench-seat\"></div>\n        </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isHomeTeam : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["__templates"]["mihinchada"]["player"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"progress-circular-container\">\n    <div class=\"progress-circular\" data-js=\"player-progress\">\n        <div class=\"c100 p"
    + alias3(((helper = (helper = helpers.promedio || (depth0 != null ? depth0.promedio : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"promedio","hash":{},"data":data}) : helper)))
    + " big\">\n            <span>"
    + alias3(((helper = (helper = helpers.shirtNumber || (depth0 != null ? depth0.shirtNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shirtNumber","hash":{},"data":data}) : helper)))
    + "</span>\n            <div class=\"slice\">\n                <div class=\"bar\"></div>\n                <div class=\"fill\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<a href=\"#modalPlayer\" data-js=\"player-info\">\n    <div class=\"player-name\">"
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.last : stack1), depth0))
    + "</div>\n</a>";
},"useData":true});
this["__templates"]["mihinchada"]["referee"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<div class=\"progress-circular-container\">\n    <div class=\"progress-circular\" data-js=\"player-progress\">\n        <div class=\"c100 p"
    + alias1(((helper = (helper = helpers.promedio || (depth0 != null ? depth0.promedio : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"promedio","hash":{},"data":data}) : helper)))
    + " big\">\n            <span>R</span>\n            <div class=\"slice\">\n                <div class=\"bar\"></div>\n                <div class=\"fill\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<a href=\"#modalPlayer\" data-js=\"player-info\">\n    <div class=\"referee-name\">"
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.last : stack1), depth0))
    + "</div>\n</a>";
},"useData":true});
this["__templates"]["mihinchada"]["tabs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<li>Inicio</li>\n<li>Partidos</li>\n<li>Chat</li>";
},"useData":true});
this["__templates"]["mihinchada"]["team"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "    <div class=\"goalkeeper-row\" data-js=\"goalkeeper\"></div>\n    <div class=\"defenders-row\" data-js=\"defenders\"></div>\n    <div class=\"midfielders-row\" data-js=\"midfielders\"></div>\n    <div class=\"attackers-row\" data-js=\"attackers\"></div>\n";
},"3":function(depth0,helpers,partials,data) {
    return "    <div class=\"attackers-row\" data-js=\"attackers\"></div>\n    <div class=\"midfielders-row\" data-js=\"midfielders\"></div>\n    <div class=\"defenders-row\" data-js=\"defenders\"></div>\n    <div class=\"goalkeeper-row\" data-js=\"goalkeeper\"></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isHomeTeam : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});