"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xbase64 = void 0;
var _jsBase = require("js-base64");
const Xbase64 = {
  urlsafe_encode64(str) {
    return _jsBase.Base64.encodeURI(str);
  },
  urlsafe_decode64(str) {
    return _jsBase.Base64.decode(str);
  }
};
exports.Xbase64 = Xbase64;
//# sourceMappingURL=xbase64.js.map