System.register(['./wrapper'], function (_export) {
  'use strict';

  var wrap;

  _export('GraphQL', GraphQL);

  function GraphQL(target) {
    return wrap(target);
  }

  return {
    setters: [function (_wrapper) {
      wrap = _wrapper.wrap;
    }],
    execute: function () {}
  };
});