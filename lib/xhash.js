"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xhash = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _xobject = require("./xobject.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Xhash = {
  hash_count(hash) {
    return Object.values(hash).length;
  },
  hash_compact(hash) {
    return _lodash.default.reduce(hash, (a, val, key) => {
      if (val == null) {} else {
        a[key] = val;
      }
      return a;
    }, {});
  },
  hash_compact_blank(hash) {
    return _lodash.default.reduce(hash, (a, val, key) => {
      if (_xobject.Xobject.present_p(val)) {
        a[key] = val;
      }
      return a;
    }, {});
  },
  hash_delete(hash, key) {
    const value = hash[key];
    delete hash[key];
    return value;
  },
  hash_extract_self(hash) {
    const result = {};
    for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      keys[_key - 1] = arguments[_key];
    }
    keys.forEach(key => {
      if (key in hash) {
        result[key] = this.hash_delete(hash, key);
      }
    });
    return result;
  },
  hash_slice(hash) {
    const result = {};
    for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      keys[_key2 - 1] = arguments[_key2];
    }
    keys.forEach(key => {
      if (key in hash) {
        result[key] = hash[key];
      }
    });
    return result;
  }
};
exports.Xhash = Xhash;
//# sourceMappingURL=xhash.js.map