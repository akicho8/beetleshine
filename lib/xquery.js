"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xquery = void 0;
var _xstring = require("./xstring.js");
var _xhash = require("./xhash.js");
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Xquery = {
  query_compact(str) {
    const hash = this.query_hash_from_str(str);
    const compacted_hash = _xhash.Xhash.hash_compact(hash);
    return this.query_hash_to_str(compacted_hash);
  },
  query_str_merge(str, params) {
    const hash = this.query_hash_from_str(str);
    _lodash.default.each(params, (v, k) => hash[k] = v);
    return this.query_hash_to_str(hash);
  },
  query_hash_from_str(str) {
    const queries = _xstring.Xstring.str_split(str || "");
    const pair_values = queries.map(e => _xstring.Xstring.str_split(e, /:/));
    const hash = pair_values.reduce((a, _ref) => {
      let [k, v] = _ref;
      return {
        ...a,
        [k]: v
      };
    }, {});
    return hash;
  },
  query_hash_to_str(hash) {
    return _lodash.default.map(hash, (v, k) => [k, v].join(":")).join(" ");
  }
};
exports.Xquery = Xquery;
//# sourceMappingURL=xquery.js.map