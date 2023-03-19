"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xaratio = void 0;
var _xinteger = require("./xinteger.js");
const Xaratio = {
  aspect_ratio_normalize(w, h) {
    w = w || 0;
    h = h || 0;
    if (w === 0 || h === 0) {
      return;
    }
    if (w >= h) {
      w = w / h;
      h = 1;
    } else {
      h = h / w;
      w = 1;
    }
    return [w, h];
  },
  aspect_ratio_gcd(w, h) {
    w = w || 0;
    h = h || 0;
    if (w === 0 || h === 0) {
      return;
    }
    const v = _xinteger.Xinteger.gcd(w, h);
    w = w / v;
    h = h / v;
    return [w, h];
  }
};
exports.Xaratio = Xaratio;
//# sourceMappingURL=xaratio.js.map