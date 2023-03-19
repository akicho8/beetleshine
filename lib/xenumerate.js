"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xenumerate = void 0;
var Xenumerate = {
  n_times: function n_times(n, block) {
    for (var i = 0; i < n; i++) {
      block(i);
    }
  },
  n_times_collect: function n_times_collect(n, block) {
    var ary = [];
    for (var i = 0; i < n; i++) {
      ary.push(block(i));
    }
    return ary;
  }
};
exports.Xenumerate = Xenumerate;
//# sourceMappingURL=xenumerate.js.map