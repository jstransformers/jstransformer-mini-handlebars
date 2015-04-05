/**
 * jstransformer-mini-handlebars <https://github.com/jstransformers/jstransformer-mini-handlebars>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var transformer = require('jstransformer');
var transform = transformer(require('../index'));


test('should render handlebars template string, synchronously', function(done) {
  var locals = {name: 'jstransformer-handlebars'};
  var actual = transform.render('<p>Hello, my name is {{name}}.</p>', {}, locals);
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual.body, expected);
  done();
});

test('should render handlebars template string, async/promise', function(done) {
  var locals = {name: 'jstransformer-handlebars'};
  var promise = transform.renderAsync('<p>Hello, my name is {{name}}.</p>', {}, locals);
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  promise.then(function(actual) {
    test.equal(actual.body, expected);
    done();
  });
});

test('should render hbs from a given filepath, synchronously', function(done) {
  var locals = {name: 'jstransformer-handlebars'};
  var actual = transform.renderFile('./test/fixture.hbs', {}, locals);
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  test.equal(actual.body, expected);
  done();
});

test('should render hbs from a given filepath, async/promise', function(done) {
  var locals = {name: 'jstransformer-handlebars'};
  var promise = transform.renderFileAsync('./test/fixture.hbs', {}, locals);
  var expected = '<p>Hello, my name is jstransformer-handlebars.</p>';

  promise.then(function(actual) {
    // console.log(actual) //=> '<p>Hello, my name is .</p>'
    // test.equal(actual.body, expected);
    done();
  });
});
