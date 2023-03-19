"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xassertion = void 0;
const Xassertion = {
  __assert__(value) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!value) {
      console.error(`${value}: ${message}`);
      this.__assert_show__(message);
    }
  },
  __assert_equal__(expected, actual) {
    let message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (actual !== expected) {
      console.error(`<${expected}> expected but was <${actual}>`);
      this.__assert_show__(message);
    }
  },
  __assert_kind_of_integer__(value) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert__(Number.isInteger(value));
  },
  __assert_kind_of_string__(value) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert_equal__("string", typeof value, message);
  },
  __assert_kind_of_array__(value) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert_equal__("array", typeof value, message);
  },
  __assert_kind_of_hash__(value) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert_equal__("object", typeof value, message);
  },
  __assert_kind_of_object__(value) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.__assert_equal__("object", typeof value, message);
  },
  __assert_nonzero__(v) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "divided by 0";
    this.__assert__(v !== 0, message);
  },
  __assert_show__() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    message = message || "ぶっこわれました";
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