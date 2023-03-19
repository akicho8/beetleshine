"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xtag = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _xstring = require("./xstring.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Xtag = {
  tags_add(tags, add_tags) {
    tags = _xstring.Xstring.str_to_tags(tags);
    add_tags = _xstring.Xstring.str_to_tags(add_tags);
    return _lodash.default.uniq([...tags, ...add_tags]);
  },
  tags_remove(tags, remove_tags) {
    tags = _xstring.Xstring.str_to_tags(tags);
    remove_tags = _xstring.Xstring.str_to_tags(remove_tags);
    return _lodash.default.reject(tags, e => remove_tags.includes(e));
  }
};
exports.Xtag = Xtag;
//# sourceMappingURL=xtag.js.map