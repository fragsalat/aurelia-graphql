'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

var _config = require('./config');

function configure(aurelia, configCallback) {
  configCallback(_config.config);
}