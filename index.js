/**
 * jstransformer-mini-handlebars <https://github.com/jstransformers/jstransformer-mini-handlebars>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var MiniHandlebars = require('mini-handlebars');
var hbs = new MiniHandlebars();

exports.name = 'mini-handlebars';
exports.outputFormat = 'html';

exports.render = function _render(str, options, locals) {
  return hbs.render(str, locals);
};
