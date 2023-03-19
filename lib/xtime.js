"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xtime = void 0;
var _xinteger = require("./xinteger.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Xtime = {
  xtime_format_human_hms: function xtime_format_human_hms(seconds) {
    var format = "";
    if (seconds < 60) {
      return "".concat(seconds, "\u79D2");
    } else if (seconds < 60 * 60) {
      var _Xinteger$idivmod = _xinteger.Xinteger.idivmod(seconds, 60),
        _Xinteger$idivmod2 = _slicedToArray(_Xinteger$idivmod, 2),
        m = _Xinteger$idivmod2[0],
        s = _Xinteger$idivmod2[1];
      return "".concat(m, "\u5206").concat(s, "\u79D2");
    } else {
      var _Xinteger$idivmod3 = _xinteger.Xinteger.idivmod(seconds, 60 * 60),
        _Xinteger$idivmod4 = _slicedToArray(_Xinteger$idivmod3, 2),
        h = _Xinteger$idivmod4[0],
        _m = _Xinteger$idivmod4[1];
      return "".concat(h, "\u6642\u9593").concat(_m, "\u5206");
    }
  }
};
exports.Xtime = Xtime;
//# sourceMappingURL=xtime.js.map