"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xstring = void 0;
var _xassertion = require("./xassertion.js");
var _xobject = require("./xobject.js");
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MD5 = require("md5.js");
var KANJI_NUMBER_TO_HANKAKU_DIGIT_TABLE = {
  "〇": "0",
  "一": "1",
  "二": "2",
  "三": "3",
  "四": "4",
  "五": "5",
  "六": "6",
  "七": "7",
  "八": "8",
  "九": "9"
};
var Xstring = {
  str_constantize: function str_constantize(str) {
    if (typeof window === "undefined") {
      return;
    }
    _xassertion.Xassertion.assert(typeof window !== 'undefined', "typeof window !== 'undefined'");
    _xassertion.Xassertion.assert(window[str], "window[str]");
    return window[str];
  },
  str_to_boolean: function str_to_boolean(str) {
    var _str;
    str = ((_str = str) !== null && _str !== void 0 ? _str : "").toString();
    str = str.trim().toLowerCase();
    return ["1", "t", "true", "on", "enabled", "enable"].includes(str);
  },
  str_space_remove: function str_space_remove(str) {
    var _str2;
    str = ((_str2 = str) !== null && _str2 !== void 0 ? _str2 : "").toString();
    str = str.replace(/[\s\u3000]+/g, "");
    return str;
  },
  str_squish: function str_squish(str) {
    var _str3;
    str = ((_str3 = str) !== null && _str3 !== void 0 ? _str3 : "").toString();
    str = str.replace(/[\s\u3000]+/g, " ");
    str = str.trim();
    return str;
  },
  str_strip: function str_strip(str) {
    var _str4;
    str = ((_str4 = str) !== null && _str4 !== void 0 ? _str4 : "").toString();
    str = str.replace(/^[\s\u3000]+/, "");
    str = str.replace(/[\s\u3000]+$/, "");
    return str;
  },
  str_strip_tags: function str_strip_tags(str) {
    if (typeof DOMParser === "undefined") {
      return;
    }
    var dom_parser = new DOMParser();
    return dom_parser.parseFromString(str, "text/html").body.textContent;
  },
  str_to_words: function str_to_words(str) {
    var _str5;
    str = ((_str5 = str) !== null && _str5 !== void 0 ? _str5 : "").toString();
    str = str.replace(/,/g, " ");
    str = this.str_squish(str);
    return this.str_split(str, /\s+/);
  },
  str_to_tags: function str_to_tags(str) {
    return _lodash["default"].uniq(this.str_to_words(str));
  },
  tags_str_toggle: function tags_str_toggle(keywords_str, str) {
    var av = this.str_to_tags(keywords_str);
    if (av.includes(str)) {
      _lodash["default"].pull(av, str);
    } else {
      av.push(str);
    }
    return av.join(" ");
  },
  str_split: function str_split(str) {
    var _str6;
    var regexp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /\s+/;
    str = ((_str6 = str) !== null && _str6 !== void 0 ? _str6 : "").toString();
    if (_xobject.Xobject.blank_p(str)) {
      return [];
    }
    return str.split(regexp);
  },
  str_truncate: function str_truncate(str) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _lodash["default"].truncate(str, _objectSpread({
      omission: "...",
      length: 80
    }, options));
  },
  str_to_hash_number: function str_to_hash_number(str) {
    return _lodash["default"].sumBy(_toConsumableArray(str), function (e) {
      return e.codePointAt(0);
    });
  },
  hira_to_kata: function hira_to_kata(str) {
    return str.replace(/[\u3041-\u3096]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) + 0x60);
    });
  },
  kana_to_hira: function kana_to_hira(str) {
    return str.replace(/[\u30A1-\u30FA]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) - 0x60);
    });
  },
  hankaku_format: function hankaku_format(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
  },
  kanji_hankaku_number_format: function kanji_hankaku_number_format(str) {
    return str.replace(/[〇一二三四五六七八九]/g, function (s) {
      return KANJI_NUMBER_TO_HANKAKU_DIGIT_TABLE[s];
    });
  },
  str_normalize_for_ac: function str_normalize_for_ac(str) {
    var hankaku = this.hankaku_format(str !== null && str !== void 0 ? str : "");
    return this.kanji_hankaku_number_format(hankaku).toLowerCase();
  },
  str_to_md5: function str_to_md5(str) {
    return new MD5().update(str).digest("hex");
  },
  str_simple_format: function str_simple_format(str) {
    return str.replace(/\n/g, "<br/>");
  }
};
exports.Xstring = Xstring;
//# sourceMappingURL=xstring.js.map