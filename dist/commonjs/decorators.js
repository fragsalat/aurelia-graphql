'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.GraphQL = GraphQL;

var _wrapper = require('./wrapper');

function GraphQL(target) {
  return (0, _wrapper.wrap)(target);
}