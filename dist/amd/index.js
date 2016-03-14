define(['exports', './config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(aurelia, configCallback) {
    configCallback(_config.config);
  }
});