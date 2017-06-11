# jstransformer-mini-handlebars

[MiniHandlebars](https://github.com/mikesmullin/mini-handlebars) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-foo/master.svg)](https://travis-ci.org/jstransformers/jstransformer-foo)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-foo/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-foo)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-foo/master.svg)](http://david-dm.org/jstransformers/jstransformer-foo)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-foo.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-foo.svg)](https://www.npmjs.org/package/jstransformer-foo)

## Installation

    npm install jstransformer-mini-handlebars

## API

```js
var miniHandlebars = require('jstransformer')(require('jstransformer-mini-handlebars'));

miniHandlebars.render('Hello, {{name}}!', {name: 'World'}).body
//=> 'Hello, World!'
```

## License

MIT
