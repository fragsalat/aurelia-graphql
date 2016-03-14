System.register([], function (_export) {
  'use strict';

  var Config, config;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Config = function Config() {
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

      config = new Config();

      _export('config', config);
    }
  };
});