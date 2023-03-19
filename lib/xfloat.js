"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xfloat = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Xfloat = {
  number_floor: function number_floor(v) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return _lodash["default"].floor(v, precision);
  },
  number_ceil: function number_ceil(v) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return _lodash["default"].ceil(v, precision);
  },
  number_round: function number_round(v) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return _lodash["default"].round(v, precision);
  },
  number_round_s: function number_round_s(v) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return v.toFixed(precision);
  },
  number_truncate: function number_truncate(v) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var base = Math.pow(10, precision);
    return Math.trunc(v * base) / base;
  },
  floatx100_percentage: function floatx100_percentage(v) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return this.number_floor(v * 100, precision);
  }
};
exports.Xfloat = Xfloat;
//# sourceMappingURL=xfloat.js.map