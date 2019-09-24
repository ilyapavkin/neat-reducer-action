"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paramFilter = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var paramFilter = function paramFilter(param) {
  var expected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['string', 'function'];
  var minParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  /* eslint-disable valid-typeof */
  // Punchy stuff. Result would be array of one or two elements with expected types of false
  var result = ( // param IS array, param IS at least required length, param entries matching corresponds expected types
  // if false - fall down to singular check; if true - return trimmed array of params
  Array.isArray(param) && param.length > minParams - 1 && param.map(function (v, i) {
    return i >= expected.length || _typeof(v) === expected[i];
  }).reduce(function (a, v) {
    return a && v;
  }) ? param.slice(0, expected.length) : false) || ( // param IS NOT array, param could be singular, param matching expected type
  // if false - result false; if true - return array with param in it
  !Array.isArray(param) && minParams <= 1 && _typeof(param) === expected[0] ? [param] : false);
  /* eslint-enable valid-typeof */

  if (result === false) {
    // if false throw exception
    var pType = Array.isArray(param) && "[".concat(param.map(function (p) {
      return _typeof(p);
    }).join(', '), "]") || _typeof(param);

    throw new Error("Param should be ".concat(expected[0], " or array of [").concat(expected.join(', '), "], got ").concat(param, " (").concat(pType, ")"));
  }

  return result.filter(function (v) {
    return v !== undefined;
  });
};

exports.paramFilter = paramFilter;