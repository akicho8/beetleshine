"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xobject = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var util = require("util");
var Xobject = {
  blank_p: function blank_p(value) {
    return value === undefined || value === null || value === false || _typeof(value) === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;
  },
  present_p: function present_p(value) {
    return !this.blank_p(value);
  },
  presence: function presence(value) {
    if (this.blank_p(value)) {
      return undefined;
    }
    return value;
  },
  p: function p(value) {
    console.log(value);
  },
  pp: function pp(value) {
    console.log(util.inspect(value));
  },
  short_inspect: function short_inspect(value) {
    return util.inspect(value);
  },
  i: function i(value) {
    return util.inspect(value);
  },
  pretty_inspect: function pretty_inspect(value) {
    return JSON.stringify(value, null, 4);
  },
  a: function a(value) {
    alert(this.i(value));
  },
  sleep: function sleep(second) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, second * 1000);
    });
  }
};
exports.Xobject = Xobject;
//# sourceMappingURL=xobject.js.map