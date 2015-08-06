'use strict';

var fs = require('fs');
var path = require('path');
var MiniHandlebars = require('mini-handlebars');
var hbs = new MiniHandlebars();
var extend = require('extend-shallow');

exports.name = 'mini-handlebars';
exports.inputFormats = ['hbs', 'mhbs', 'handlebars'];
exports.outputFormat = 'html';

exports.render = function _render(str, options, locals) {
  var data = extend({}, options, locals);
  return hbs.render(str, data);
};
