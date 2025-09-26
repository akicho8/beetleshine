"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xmath = void 0;
var Xmath = {
  map_range: function map_range(val, in_min, in_max, out_min, out_max) {
    if (in_min === in_max) {
      throw new Error("Xmath.map_range: in_min と in_max が同じなので計算できません");
    }
    var ratio = (val - in_min) / (in_max - in_min);
    return ratio * (out_max - out_min) + out_min;
  }
};
exports.Xmath = Xmath;
//# sourceMappingURL=xmath.js.map