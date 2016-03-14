define(['exports', './wrapper'], function (exports, _wrapper) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.GraphQL = GraphQL;

  function GraphQL(target) {
    return (0, _wrapper.wrap)(target);
  }
});