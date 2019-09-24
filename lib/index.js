"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Action = _interopRequireDefault(require("./Action"));

var _ActionError = _interopRequireDefault(require("./ActionError"));

var _Request = _interopRequireDefault(require("./Request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ActionBuilder =
/*#__PURE__*/
function () {
  function ActionBuilder() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ActionBuilder);

    this.options = options;
    this.Action = _Action["default"];
    this.ActionError = _ActionError["default"];
    this.Request = _Request["default"];
  }

  _createClass(ActionBuilder, [{
    key: "action",
    value: function action(type) {
      var defAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.defaultAction;
      return {
        action: (0, _Action["default"])(type, defAction)
      };
    }
  }, {
    key: "error",
    value: function error(type) {
      var defError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.defaultError;
      return {
        error: (0, _ActionError["default"])(type, defError)
      };
    }
  }, {
    key: "request",
    value: function request(type) {
      var onResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.defAction;
      var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.options.defError;
      return (0, _Request["default"])(type, onResponse, onError);
    }
  }]);

  return ActionBuilder;
}();

exports["default"] = ActionBuilder;