define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Config = function Config() {
    _classCallCheck(this, Config);

    this.httpClient = null;
    this.baseUri = 'http://dev.greatshot.de/?_url=/graphql/query&XDEBUG_SESSION_START=dbg';

    this.responseParser = function parseResponse(response) {
      if (response.error) {
        throw new Error('Graphql query failed');
      }
      return response.data;
    };
  };

  var config = new Config();
  exports.config = config;
});