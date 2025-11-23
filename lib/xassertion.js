"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xassertion = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _xobject = require("./xobject.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var Xassertion = {
  assert: function assert(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!value) {
      console.error("".concat(value, ": ").concat(message));
      this.assert_debugger(message);
    }
  },
  assert_equal: function assert_equal(expected, actual) {
    var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (actual !== expected) {
      console.error("<".concat(expected, "> expected but was <").concat(actual, ">"));
      this.assert_debugger(message);
    }
  },
  assert_kind_of_integer: function assert_kind_of_integer(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed: not integer";
    this.assert(Number.isInteger(value), message);
  },
  assert_kind_of_float: function assert_kind_of_float(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed: not float";
    this.assert(typeof value === "number" && !Number.isInteger(value), message);
  },
  assert_kind_of_numeric: function assert_kind_of_numeric(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed: not numeric";
    this.assert_equal("number", _typeof(value), message);
  },
  assert_kind_of_string: function assert_kind_of_string(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed: not string";
    this.assert_equal("string", _typeof(value), message);
  },
  assert_kind_of_array: function assert_kind_of_array(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed: not array";
    this.assert(_lodash["default"].isArray(value), message);
  },
  assert_kind_of_hash: function assert_kind_of_hash(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed: not hash";
    this.assert_equal("object", _typeof(value), message);
  },
  assert_kind_of_object: function assert_kind_of_object(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed: not object";
    this.assert_equal("object", _typeof(value), message);
  },
  assert_present: function assert_present(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed: blank";
    this.assert(_xobject.Xobject.present_p(value), message);
  },
  assert_blank: function assert_blank(value) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed: present";
    this.assert(_xobject.Xobject.blank_p(value), message);
  },
  assert_nonzero: function assert_nonzero(v) {
    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "divided by 0";
    this.assert(v !== 0, message);
  },
  assert_debugger: function assert_debugger() {
    var _message;
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    debugger;
    (_message = message) !== null && _message !== void 0 ? _message : message = "Assertion failed";
    if (typeof window !== 'undefined') {
      alert(message);
    } else {
      throw new Error(message);
    }
  }
};
exports.Xassertion = Xassertion;
//# sourceMappingURL=xassertion.js.map