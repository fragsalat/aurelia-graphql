define(['exports', './config', './decorators', './wrapper'], function (exports, _config, _decorators, _wrapper) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;
  Object.defineProperty(exports, 'GraphQL', {
    enumerable: true,
    get: function get() {
      return _decorators.GraphQL;
    }
  });
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
});