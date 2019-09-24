"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Action = _interopRequireDefault(require("./Action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defError = function defError(error) {
  return error !== undefined ? {
    error: error
  } : {};
};

var _default = function _default(type) {
  var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defError;

  if (typeof error !== 'function') {
    throw new Error('error must be function');
  }

  return (0, _Action["default"])(type, error);
};

exports["default"] = _default;