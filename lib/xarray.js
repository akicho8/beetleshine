"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xarray = void 0;
var _xobject = require("./xobject.js");
var _xinteger = require("./xinteger.js");
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Xarray = {
  ary_each_slice_to_a(ary, step) {
    if (step <= 0) {
      throw new Error("invalid slice size");
    }
    const new_ary = [];
    for (let i = 0; i < ary.length; i += step) {
      new_ary.push(ary.slice(i, i + step));
    }
    return new_ary;
  },
  ary_reverse(ary) {
    return [...ary].reverse();
  },
  ary_shuffle(ary) {
    return _lodash.default.shuffle(ary);
  },
  ary_wrap(ary) {
    if (!_lodash.default.isArray(ary)) {
      ary = [ary];
    }
    return ary;
  },
  ary_cycle_at(ary, index) {
    return ary[_xinteger.Xinteger.imodulo(index, ary.length)];
  },
  ary_move(ary, from, to) {
    const n = ary.length;
    ary = [...ary];
    to = _xinteger.Xinteger.imodulo(to, n);
    if (from === to || from > n - 1 || to > n - 1) {
      return ary;
    }
    const v = ary[from];
    const tail = ary.slice(from + 1);
    ary.splice(from);
    Array.prototype.push.apply(ary, tail);
    ary.splice(to, 0, v);
    return ary;
  },
  ary_rotate(ary) {
    let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    ary = [...ary];
    if (ary.length > 0) {
      if (n > 0) {
        for (let i = 0; i < n; i += 1) {
          ary.push(ary.shift());
        }
      } else {
        for (let i = 0; i < -n; i += 1) {
          ary.unshift(ary.pop());
        }
      }
    }
    return ary;
  },
  ary_take(ary, index) {
    return _lodash.default.take(ary, index);
  },
  ary_drop(ary, index) {
    return _lodash.default.drop(ary, index);
  },
  ary_compact(ary) {
    return _lodash.default.reduce(ary, (a, val) => {
      if (val == null) {} else {
        a.push(val);
      }
      return a;
    }, []);
  },
  ary_compact_blank(ary) {
    return _lodash.default.reduce(ary, (a, val) => {
      if (_xobject.Xobject.present_p(val)) {
        a.push(val);
      }
      return a;
    }, []);
  }
};
exports.Xarray = Xarray;
//# sourceMappingURL=xarray.js.map