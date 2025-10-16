"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xdelay = void 0;
var Xdelay = {
  delay_block: function delay_block(seconds, block) {
    if (seconds < 0) {
      return null;
    }
    if (seconds === 0) {
      block();
      return null;
    }
    return setTimeout(block, 1000 * seconds);
  },
  delay_stop: function delay_stop(delay_id) {
    if (delay_id) {
      clearTimeout(delay_id);
    }
  },
  callback_later: function callback_later(block) {
    return setTimeout(block, 0);
  },
  sleep: function sleep(second) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, second * 1000);
    });
  }
};
exports.Xdelay = Xdelay;
Xdelay.delay_start = Xdelay.delay_block;
//# sourceMappingURL=xdelay.js.map