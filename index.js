'use strict'

var MiniHandlebars = require('mini-handlebars')
var extend = require('extend-shallow')

var hbs = new MiniHandlebars()

exports.name = 'mini-handlebars'
exports.inputFormats = ['hbs', 'mhbs', 'handlebars']
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  var data = extend({}, options, locals)
  return hbs.render(str, data)
}
