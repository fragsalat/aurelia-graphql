'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

exports.wrap = wrap;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _aureliaFetchClient = require('aurelia-fetch-client');

var _aureliaFramework = require('aurelia-framework');

var _config = require('./config');

function wrap(target) {
  var ViewModelWrapper = (function (_target) {
    _inherits(ViewModelWrapper, _target);

    function ViewModelWrapper() {
      _classCallCheck(this, ViewModelWrapper);

      _get(Object.getPrototypeOf(ViewModelWrapper.prototype), 'constructor', this).call(this);

      if (target.getQuery) {
        this.query();
      }
    }

    _createClass(ViewModelWrapper, [{
      key: 'query',
      value: function query() {
        var _this = this;

        _get(Object.getPrototypeOf(ViewModelWrapper.prototype), 'query', this) && _get(Object.getPrototypeOf(ViewModelWrapper.prototype), 'query', this).call(this);

        var body = (0, _aureliaFetchClient.json)({
          query: target.getQuery(),
          variables: this.getVariables && this.getVariables() || {}
        });

        Promise.resolve(_config.config.httpClient || _aureliaFramework.Container.get(_aureliaFetchClient.HttpClient)).then(function (httpClient) {
          if (httpClient.fetch) {
            return httpClient.fetch(_config.config.baseUri, {
              method: 'post',
              body: body
            });
          }
          throw new Error('Missing fetch function on HttpClient');
        }).then(function (response) {
          return response.json();
        }).then(function (response) {
          return _this.parseResponse(response);
        }).then(function (data) {
          return _this.handleData(data);
        });
      }
    }, {
      key: 'parseResponse',
      value: function parseResponse(response) {
        if (typeof _config.config.responseParser === 'function') {
          return _config.config.responseParser.apply(this, arguments);
        }

        return response;
      }
    }, {
      key: 'handleData',
      value: function handleData(data) {
        _get(Object.getPrototypeOf(ViewModelWrapper.prototype), 'handleData', this) && _get(Object.getPrototypeOf(ViewModelWrapper.prototype), 'handleData', this).call(this, data);
        this.data = data;
      }
    }]);

    return ViewModelWrapper;
  })(target);

  return ViewModelWrapper;
}