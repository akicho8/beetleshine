"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xhtml = void 0;
var _autolinker = _interopRequireDefault(require("autolinker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const strip_tags = require("striptags");
const Xhtml = {
  auto_link(str) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _autolinker.default.link(str, {
      newWindow: true,
      truncate: 30,
      mention: "twitter",
      ...options
    });
  },
  simple_format(str) {
    return str.replace(/\n/g, "<br/>");
  },
  strip_tags() {
    return strip_tags(...arguments);
  }
};
exports.Xhtml = Xhtml;
//# sourceMappingURL=xhtml.js.map