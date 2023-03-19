"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xassertion = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Xassertion = {
  __assert__: function __assert__(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!value) {
      console.error("".concat(value, ": ").concat(message));
      this.__assert_show__(message);
    }
  },
  __assert_equal__: function __assert_equal__(expected, actual) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (actual !== expected) {
      console.error("<".concat(expected, "> expected but was <").concat(actual, ">"));
      this.__assert_show__(message);
    }
  },
  __assert_kind_of_integer__: function __assert_kind_of_integer__(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert__(Number.isInteger(value));
  },
  __assert_kind_of_string__: function __assert_kind_of_string__(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert_equal__("string", _typeof(value), message);
  },
  __assert_kind_of_array__: function __assert_kind_of_array__(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert_equal__("array", _typeof(value), message);
  },
  __assert_kind_of_hash__: function __assert_kind_of_hash__(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert_equal__("object", _typeof(value), message);
  },
  __assert_kind_of_object__: function __assert_kind_of_object__(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert_equal__("object", _typeof(value), message);
  },
  __assert_nonzero__: function __assert_nonzero__(v) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "divided by 0";
    this.__assert__(v !== 0, message);
  },
  __assert_show__: function __assert_show__() {
    var _message;
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    (_message = message) !== null && _message !== void 0 ? _message : message = "Assertion failed";
    if (typeof window !== 'undefined') {
      alert(message);
    } else {
      throw new Error(message);
    }
    debugger;
  }
};
exports.Xassertion = Xassertion;
//# sourceMappingURL=xassertion.js.map