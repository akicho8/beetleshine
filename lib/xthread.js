"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xthread = void 0;
const Xthread = {
  thread_start(block) {
    return setTimeout(block, 0);
  },
  thread_stop(thread_id) {
    if (thread_id) {
      clearTimeout(thread_id);
    }
  }
};
exports.Xthread = Xthread;
//# sourceMappingURL=xthread.js.map