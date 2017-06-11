'use strict'

const MiniHandlebars = require('mini-handlebars')
const extend = require('extend-shallow')

const hbs = new MiniHandlebars()

exports.name = 'mini-handlebars'
exports.inputFormats = ['hbs', 'mhbs', 'handlebars']
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  const data = extend({}, options, locals)
  return hbs.render(str, data)
}
