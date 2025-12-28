"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xbenchmark = void 0;
var Xbenchmark = {
  benchmark_ms: function benchmark_ms(block) {
    var start = performance.now();
    block();
    var end = performance.now();
    return end - start;
  },
  benchmark_print: function benchmark_print(name, cond, block) {
    if (cond) {
      var ms = this.benchmark_ms(block);
      console.log("".concat(name, ": ").concat(ms, " ms"));
    } else {
      block();
    }
  }
};
exports.Xbenchmark = Xbenchmark;
//# sourceMappingURL=xbenchmark.js.map