"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xtag = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _xstring = require("./xstring.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Xtag = {
  tags_add: function tags_add(tags, add_tags) {
    tags = _xstring.Xstring.str_to_tags(tags);
    add_tags = _xstring.Xstring.str_to_tags(add_tags);
    return _lodash["default"].uniq([].concat(_toConsumableArray(tags), _toConsumableArray(add_tags)));
  },
  tags_remove: function tags_remove(tags, remove_tags) {
    tags = _xstring.Xstring.str_to_tags(tags);
    remove_tags = _xstring.Xstring.str_to_tags(remove_tags);
    return _lodash["default"].reject(tags, function (e) {
      return remove_tags.includes(e);
    });
  }
};
exports.Xtag = Xtag;
//# sourceMappingURL=xtag.js.map