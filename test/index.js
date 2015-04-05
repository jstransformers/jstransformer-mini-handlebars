/**
 * jstransformer-mini-handlebars <https://github.com/jstransformers/jstransformer-mini-handlebars>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var transform = require('../index');

test('should render hbs file from given string (.render)', function(done) {
  var actual = transform.render('<p>Hello, my name is {{name}}.</p>', {name: 'jstransformer-mini-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-mini-handlebars.</p>';

  test.equal(actual, expected);
  done();
});

test('should render from a given filepath, synchronously', function(done) {
  var actual = transform.renderFile('./test/fixture.hbs', {name: 'jstransformer-mini-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-mini-handlebars.</p>';

  test.equal(actual, expected);
  done();
});

test('should render hbs file asynchronously (promise)', function(done) {
  var promise = transform.renderFileAsync('./test/fixture.hbs', {name: 'jstransformer-mini-handlebars'});
  var expected = '<p>Hello, my name is jstransformer-mini-handlebars.</p>';

  promise.then(function(actual) {
    test.equal(actual, expected);
    done();
  });
});
