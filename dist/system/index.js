System.register(['./config'], function (_export) {
  'use strict';

  var config;

  _export('configure', configure);

  function configure(aurelia, configCallback) {
    configCallback(config);
  }

  return {
    setters: [function (_config) {
      config = _config.config;
    }],
    execute: function () {}
  };
});