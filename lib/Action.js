"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defAction = function defAction() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return payload;
};

var _default = function _default(type) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defAction;

  if (typeof action !== 'function') {
    throw new Error('action must be function');
  }

  if (typeof type !== 'string') {
    throw new Error('type must be string');
  }

  var func = function func() {
    return _objectSpread({
      type: type
    }, action.apply(void 0, arguments));
  };

  func.type = type;
  return func;
};

exports["default"] = _default;