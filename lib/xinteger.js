"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xinteger = void 0;
var _xassertion = require("./xassertion.js");
var Xinteger = {
  imodulo: function imodulo(v, n) {
    _xassertion.Xassertion.__assert_nonzero__(n);
    v = v % n;
    v = Math.trunc(v);
    if (v < 0) {
      v = n + v;
    }
    return v + 0;
  },
  idiv: function idiv(v, n) {
    _xassertion.Xassertion.__assert_nonzero__(n);
    return Math.floor(v / n);
  },
  idivmod: function idivmod(v, n) {
    return [this.idiv(v, n), this.imodulo(v, n)];
  },
  even_p: function even_p(v) {
    return v % 2 === 0;
  },
  odd_p: function odd_p(v) {
    return !this.even_p(v);
  },
  gcd: function gcd(a, b) {
    if (a === 0) {
      return b;
    }
    return this.gcd(b % a, a);
  },
  lcm: function lcm(a, b) {
    return a * b / this.gcd(a, b);
  },
  iclamp: function iclamp(value, min, max) {
    if (max < max) {
      throw new Error("min argument must be smaller than max argument");
    }
    if (value < min) {
      value = min;
    }
    if (max < value) {
      value = max;
    }
    return value;
  }
};
exports.Xinteger = Xinteger;
//# sourceMappingURL=xinteger.js.map