"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Beetleshine = void 0;
var _xassertion = require("./xassertion.js");
var _xinteger = require("./xinteger.js");
var _xfloat = require("./xfloat.js");
var _xarray = require("./xarray.js");
var _xstring = require("./xstring.js");
var _xhash = require("./xhash.js");
var _xenumerate = require("./xenumerate.js");
var _xobject = require("./xobject.js");
var _xformat = require("./xformat.js");
var _xdelay = require("./xdelay.js");
var _xthread = require("./xthread.js");
var _xmath = require("./xmath.js");
var _xrand = require("./xrand.js");
var _xtag = require("./xtag.js");
var _xhtml = require("./xhtml.js");
var _xtime = require("./xtime.js");
var _xaratio = require("./xaratio.js");
var _xbase = require("./xbase64.js");
var _xquery = require("./xquery.js");
var _xbenchmark = require("./xbenchmark.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Beetleshine = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _xassertion.Xassertion), _xinteger.Xinteger), _xfloat.Xfloat), _xarray.Xarray), _xstring.Xstring), _xhash.Xhash), _xenumerate.Xenumerate), _xobject.Xobject), _xformat.Xformat), _xdelay.Xdelay), _xmath.Xmath), _xrand.Xrand), _xtag.Xtag), _xhtml.Xhtml), _xtime.Xtime), _xaratio.Xaratio), _xbase.Xbase64), _xquery.Xquery), _xbenchmark.Xbenchmark);
exports.Beetleshine = Beetleshine;
//# sourceMappingURL=beetleshine.js.map