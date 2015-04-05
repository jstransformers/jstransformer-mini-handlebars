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
var bluebird = require('bluebird');
var readFile = bluebird.promisify(fs.readFile);
var readFileSync = fs.readFileSync;
var hbs = new MiniHandlebars();

exports.name = 'mini-handlebars';
exports.outputFormat = 'html';

exports.render = function _render(str, locals) {
  return hbs.render(str, locals);
};
exports.renderFile = function _renderFile(filepath, locals) {
  var str = readFileSync(filepath, 'utf8');
  return exports.render(str, locals);
};
exports.renderFileAsync = function _renderFileAsync(filepath, locals) {
  var promise = readFile(filepath, 'utf8');

  return promise.then(function(str) {
    return exports.render(str, locals);
  })
};
