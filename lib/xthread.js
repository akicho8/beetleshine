"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xthread = void 0;
var Xthread = {
  thread_start: function thread_start(block) {
    return setTimeout(block, 0);
  },
  thread_stop: function thread_stop(thread_id) {
    if (thread_id) {
      clearTimeout(thread_id);
    }
  }
};
exports.Xthread = Xthread;
//# sourceMappingURL=xthread.js.map