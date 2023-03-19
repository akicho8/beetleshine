"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xtime = void 0;
var _xinteger = require("./xinteger.js");
const Xtime = {
  xtime_format_human_hms(seconds) {
    let format = "";
    if (seconds < 60) {
      return `${seconds}秒`;
    } else if (seconds < 60 * 60) {
      const [m, s] = _xinteger.Xinteger.idivmod(seconds, 60);
      return `${m}分${s}秒`;
    } else {
      const [h, m] = _xinteger.Xinteger.idivmod(seconds, 60 * 60);
      return `${h}時間${m}分`;
    }
  }
};
exports.Xtime = Xtime;
//# sourceMappingURL=xtime.js.map