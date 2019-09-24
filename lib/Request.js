"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helper = require("./helper");

var _Action = _interopRequireDefault(require("./Action"));

var _ActionError = _interopRequireDefault(require("./ActionError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = function _default(type, responseType, errorType) {
  var typeFiltered = (0, _helper.paramFilter)(type);
  var defaultResponseType = "".concat(typeFiltered[0], "_RESPONSE");
  var defaultErrorType = "".concat(typeFiltered[0], "_ERROR");
  var rt = (typeof responseType === 'function' ? [defaultResponseType, responseType] : responseType) || defaultResponseType;
  var et = (typeof errorType === 'function' ? [defaultErrorType, errorType] : errorType) || defaultErrorType;

  var action = _Action["default"].apply(void 0, _toConsumableArray(typeFiltered));

  var response = _Action["default"].apply(void 0, _toConsumableArray((0, _helper.paramFilter)(rt)));

  var error = _ActionError["default"].apply(void 0, _toConsumableArray((0, _helper.paramFilter)(et)));

  return {
    action: action,
    response: response,
    error: error
  };
};

exports["default"] = _default;