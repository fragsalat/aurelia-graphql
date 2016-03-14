'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _config = require('./config');

var _decorators = require('./decorators');

Object.defineProperty(exports, 'GraphQL', {
  enumerable: true,
  get: function get() {
    return _decorators.GraphQL;
  }
});

var _wrapper = require('./wrapper');

Object.defineProperty(exports, 'wrap', {
  enumerable: true,
  get: function get() {
    return _wrapper.wrap;
  }
});
exports.config = _config.config;

function configure(aurelia, configCallback) {
  configCallback(_config.config);
}