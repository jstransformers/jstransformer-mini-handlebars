'use strict';

var fs = require('fs');
var path = require('path');
var MiniHandlebars = require('mini-handlebars');
var hbs = new MiniHandlebars();

exports.name = 'mini-handlebars';
exports.inputFormats = ['hbs', 'mhbs', 'handlebars'];
exports.outputFormat = 'html';

exports.render = function _render(str, options, locals) {
  return hbs.render(str, locals);
};
