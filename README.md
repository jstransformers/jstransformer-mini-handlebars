# jstransformer-mini-handlebars

[MiniHandlebars](https://github.com/mikesmullin/mini-handlebars) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-mini-handlebars/master.svg)](https://travis-ci.org/jstransformers/jstransformer-mini-handlebars)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-mini-handlebars/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-mini-handlebars)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-mini-handlebars/master.svg)](http://david-dm.org/jstransformers/jstransformer-mini-handlebars)

[![NPM version](https://img.shields.io/npm/v/jstransformer-mini-handlebars.svg)](https://www.npmjs.org/package/jstransformer-mini-handlebars)

## Installation

    npm install jstransformer-mini-handlebars

## API

```js
var miniHandlebars = require('jstransformer')(require('jstransformer-mini-handlebars'))

miniHandlebars.render('Hello, {{name}}!', {name: 'World'}).body
//=> 'Hello, World!'
```

## License

MIT
