this["__templates"] = this["__templates"] || {};
this["__templates"]["mihinchada"] = this["__templates"]["mihinchada"] || {};
this["__templates"]["mihinchada"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Mi Hinchada";
},"useData":true});
this["__templates"]["mihinchada"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header class=\"header\" data-js=\"header\">Header</header>\n<div class=\"tabs-sections\" data-js=\"tabs\">Tabs</div>\n<div class=\"content\" data-js=\"content\">Content</div>";
},"useData":true});
this["__templates"]["mihinchada"]["match"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"left-corner-home\"></div>\n<div class=\"right-corner-home\"></div>\n<div class=\"left-corner-away\"></div>\n<div class=\"right-corner-away\"></div>\n<div class=\"field-half field-half-home\" data-js=\"field-half-home\"></div>\n<div class=\"field-half field-half-away\" data-js=\"field-half-away\"></div>";
},"useData":true});
this["__templates"]["mihinchada"]["player"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"player-number-container\">"
    + alias3(((helper = (helper = helpers.shirtNumber || (depth0 != null ? depth0.shirtNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shirtNumber","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"player-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});
this["__templates"]["mihinchada"]["tabs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<li>Inicio</li>\n<li>Partidos</li>\n<li>Chat</li>";
},"useData":true});
this["__templates"]["mihinchada"]["team"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"goalkeeper-row\" data-js=\"goalkeeper\"></div>\n<div class=\"defenders-row\" data-js=\"defenders\"></div>\n<div class=\"midfielders-row\" data-js=\"midfielders\"></div>\n<div class=\"forwards-row\" data-js=\"forwards\"></div>";
},"useData":true});