"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xfloat = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Xfloat = {
  number_floor(v) {
    let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return _lodash.default.floor(v, precision);
  },
  number_ceil(v) {
    let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return _lodash.default.ceil(v, precision);
  },
  number_round(v) {
    let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return _lodash.default.round(v, precision);
  },
  number_round_s(v) {
    let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return v.toFixed(precision);
  },
  number_truncate(v) {
    let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    const base = Math.pow(10, precision);
    return Math.trunc(v * base) / base;
  },
  floatx100_percentage(v) {
    let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return this.number_floor(v * 100, precision);
  }
};
exports.Xfloat = Xfloat;
//# sourceMappingURL=xfloat.js.map