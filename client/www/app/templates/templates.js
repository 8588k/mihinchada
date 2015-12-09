this["__templates"] = this["__templates"] || {};
this["__templates"]["_vamo"] = this["__templates"]["_vamo"] || {};
this["__templates"]["_vamo"]["actions"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<label for=\"personNumber\">Personas:</label><input type=\"number\" value=\"2\" min=\"0\" max=\"99\" id=\"personNumber\" class=\"person-number\" pattern=\"[0-9]{10}\">\n<input type=\"button\" value=\"+\" class=\"add\">\n<input type=\"button\" value=\"-\" class=\"remove\">";
},"useData":true});
this["__templates"]["_vamo"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Vamo & Vamo\n\n<a class='dropdown-button material-icons right' href='#' data-activates='dropdown'>more_vert</a>\n\n<ul id='dropdown' class='dropdown-content'>\n	<li>\n		<a href=\"#\" data-js=\"share\">Compartir</a>\n	</li>\n	<li class=\"divider\"></li>\n	<li>\n		<a href=\"#\" data-js=\"reset\">Borrar</a>\n	</li>\n</ul>";
},"useData":true});
this["__templates"]["_vamo"]["total"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<p>Precio total: $ <span>0</span></p>";
},"useData":true});
this["__templates"]["mihinchada"] = this["__templates"]["mihinchada"] || {};
this["__templates"]["mihinchada"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div data-js=\"content\">Content</div>";
},"useData":true});
this["__templates"]["mihinchada"]["match"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"field-half field-half-home\" data-js=\"field-half-home\">\n	<div class=\"left-corner\"></div>\n	<div class=\"left-corner\"></div>\n</div>\n<div class=\"field-half field-half-away\" data-js=\"field-half-away\">\n	<div class=\"left-corner\"></div>\n	<div class=\"left-corner\"></div>\n</div>";
},"useData":true});
this["__templates"]["mihinchada"]["player"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"player-number-container\">"
    + alias3(((helper = (helper = helpers.shirtNumber || (depth0 != null ? depth0.shirtNumber : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shirtNumber","hash":{},"data":data}) : helper)))
    + "</div>\n<div class=\"player-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});
this["__templates"]["mihinchada"]["team"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div data-js=\"goalkeeper\"></div>\n<div data-js=\"defenders\"></div>\n<div data-js=\"midfielders\"></div>\n<div data-js=\"forwards\"></div>";
},"useData":true});