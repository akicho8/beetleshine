"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xarray = void 0;
var _xobject = require("./xobject.js");
var _xinteger = require("./xinteger.js");
var _xassertion = require("./xassertion.js");
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Xarray = {
  ary_first: function ary_first(ary) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _xassertion.Xassertion.assert_kind_of_array(ary);
    if (n == null) {
      return ary[0];
    } else {
      return ary.slice(0, n);
    }
  },
  ary_last: function ary_last(ary) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _xassertion.Xassertion.assert_kind_of_array(ary);
    if (n == null) {
      return ary[ary.length - 1];
    } else {
      return ary.slice(-n);
    }
  },
  ary_take: function ary_take(ary, index) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    return _lodash["default"].take(ary, index);
  },
  ary_drop: function ary_drop(ary, index) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    return _lodash["default"].drop(ary, index);
  },
  ary_sort_by: function ary_sort_by(ary, block) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    var wrap = ary.map(function (e) {
      return {
        source: e,
        value: block(e)
      };
    });
    var sorted = _lodash["default"].sortBy(wrap, "value");
    return sorted.map(function (e) {
      return e.source;
    });
  },
  ary_find_all: function ary_find_all(ary, block) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    return ary.filter(function (e) {
      return block(e);
    });
  },
  ary_find_index: function ary_find_index(ary, block) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    var index = ary.findIndex(function (e, i) {
      return block(e);
    });
    if (index >= 0) {
      return index;
    }
  },
  ary_each_slice_to_a: function ary_each_slice_to_a(ary, step) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    if (step <= 0) {
      throw new Error("invalid slice size");
    }
    var new_ary = [];
    for (var i = 0; i < ary.length; i += step) {
      new_ary.push(ary.slice(i, i + step));
    }
    return new_ary;
  },
  ary_reverse: function ary_reverse(ary) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    return _toConsumableArray(ary).reverse();
  },
  ary_shuffle: function ary_shuffle(ary) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    return _lodash["default"].shuffle(ary);
  },
  ary_sample: function ary_sample(ary) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    return _lodash["default"].sample(ary);
  },
  ary_wrap: function ary_wrap(ary) {
    if (!_lodash["default"].isArray(ary)) {
      ary = [ary];
    }
    return ary;
  },
  ary_cycle_at: function ary_cycle_at(ary, index) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    return ary[_xinteger.Xinteger.imodulo(index, ary.length)];
  },
  ary_move: function ary_move(ary, from, to) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    var n = ary.length;
    ary = _toConsumableArray(ary);
    to = _xinteger.Xinteger.imodulo(to, n);
    if (from === to || from > n - 1 || to > n - 1) {
      return ary;
    }
    var v = ary[from];
    var tail = ary.slice(from + 1);
    ary.splice(from);
    Array.prototype.push.apply(ary, tail);
    ary.splice(to, 0, v);
    return ary;
  },
  ary_rotate: function ary_rotate(ary) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    _xassertion.Xassertion.assert_kind_of_array(ary);
    ary = _toConsumableArray(ary);
    if (ary.length > 0) {
      if (n > 0) {
        for (var i = 0; i < n; i += 1) {
          ary.push(ary.shift());
        }
      } else {
        for (var _i = 0; _i < -n; _i += 1) {
          ary.unshift(ary.pop());
        }
      }
    }
    return ary;
  },
  ary_compact: function ary_compact(ary) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    return _lodash["default"].reduce(ary, function (a, val) {
      if (val == null) {} else {
        a.push(val);
      }
      return a;
    }, []);
  },
  ary_compact_blank: function ary_compact_blank(ary) {
    _xassertion.Xassertion.assert_kind_of_array(ary);
    return _lodash["default"].reduce(ary, function (a, val) {
      if (_xobject.Xobject.present_p(val)) {
        a.push(val);
      }
      return a;
    }, []);
  }
};
exports.Xarray = Xarray;
//# sourceMappingURL=xarray.js.map