"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xstring = void 0;
var _xassertion = require("./xassertion.js");
var _xobject = require("./xobject.js");
var _lodash = _interopRequireDefault(require("lodash"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MD5 = require("md5.js");
const KANJI_NUMBER_TO_HANKAKU_DIGIT_TABLE = {
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
const Xstring = {
  str_constantize(str) {
    if (typeof window === "undefined") {
      return;
    }
    _xassertion.Xassertion.__assert__(typeof window !== 'undefined', "typeof window !== 'undefined'");
    _xassertion.Xassertion.__assert__(window[str], "window[str]");
    return window[str];
  },
  str_to_boolean(str) {
    str = (str ?? "").toString();
    str = str.trim().toLowerCase();
    return ["1", "t", "true", "on", "enabled", "enable"].includes(str);
  },
  str_space_remove(str) {
    str = (str ?? "").toString();
    str = str.replace(/[\s\u3000]+/g, "");
    return str;
  },
  str_squish(str) {
    str = (str ?? "").toString();
    str = str.replace(/[\s\u3000]+/g, " ");
    str = str.trim();
    return str;
  },
  str_strip(str) {
    str = (str ?? "").toString();
    str = str.replace(/^[\s\u3000]+/, "");
    str = str.replace(/[\s\u3000]+$/, "");
    return str;
  },
  str_strip_tags(str) {
    if (typeof DOMParser === "undefined") {
      return;
    }
    const dom_parser = new DOMParser();
    return dom_parser.parseFromString(str, "text/html").body.textContent;
  },
  str_to_words(str) {
    str = (str ?? "").toString();
    str = str.replace(/,/g, " ");
    str = this.str_squish(str);
    return this.str_split(str, /\s+/);
  },
  str_to_tags(str) {
    return _lodash.default.uniq(this.str_to_words(str));
  },
  tags_str_toggle(keywords_str, str) {
    let av = this.str_to_tags(keywords_str);
    if (av.includes(str)) {
      _lodash.default.pull(av, str);
    } else {
      av.push(str);
    }
    return av.join(" ");
  },
  str_split(str) {
    let regexp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /\s+/;
    str = (str ?? "").toString();
    if (_xobject.Xobject.blank_p(str)) {
      return [];
    }
    return str.split(regexp);
  },
  str_truncate(str) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _lodash.default.truncate(str, {
      omission: "...",
      length: 80,
      ...options
    });
  },
  str_to_hash_number(str) {
    return _lodash.default.sumBy([...str], e => e.codePointAt(0));
  },
  hira_to_kata(str) {
    return str.replace(/[\u3041-\u3096]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60));
  },
  kana_to_hira(str) {
    return str.replace(/[\u30A1-\u30FA]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
  },
  hankaku_format(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
  },
  kanji_hankaku_number_format(str) {
    return str.replace(/[〇一二三四五六七八九]/g, s => KANJI_NUMBER_TO_HANKAKU_DIGIT_TABLE[s]);
  },
  str_normalize_for_ac(str) {
    const hankaku = this.hankaku_format(str ?? "");
    return this.kanji_hankaku_number_format(hankaku).toLowerCase();
  },
  str_to_md5(str) {
    return new MD5().update(str).digest("hex");
  },
  str_simple_format(str) {
    return str.replace(/\n/g, "<br/>");
  }
};
exports.Xstring = Xstring;
//# sourceMappingURL=xstring.js.map