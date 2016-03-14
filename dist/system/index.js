System.register(['./config', './decorators', './wrapper'], function (_export) {
  'use strict';

  var config;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    configCallback(config);
  }

  return {
    setters: [function (_config) {
      config = _config.config;
    }, function (_decorators) {
      _export('GraphQL', _decorators.GraphQL);
    }, function (_wrapper) {
      _export('wrap', _wrapper.wrap);
    }],
    execute: function () {
      _export('config', config);
    }
  };
});