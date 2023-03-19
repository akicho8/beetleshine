"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xformat = void 0;
var _extsprintf = _interopRequireDefault(require("extsprintf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Xformat = {
  sprintf: function sprintf() {
    return _extsprintf["default"].sprintf.apply(_extsprintf["default"], arguments);
  }
};
exports.Xformat = Xformat;
//# sourceMappingURL=xformat.js.map