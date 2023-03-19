"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xrand = void 0;
var _xassertion = require("./xassertion.js");
const Xrand = {
  irand() {
    let n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (n >= 1.0) {
      return Math.floor(Math.random() * n);
    } else {
      return Math.random();
    }
  },
  irand_range(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  dice_roll() {
    let max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    return this.irand_range(1, max);
  }
};
exports.Xrand = Xrand;
//# sourceMappingURL=xrand.js.map