"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primitiveType = void 0;
const primitiveType = (obj) => {
    var _a, _b, _c, _d, _e, _f;
    return ((_f = (_e = (_d = (_c = (_b = (_a = ({})) === null || _a === void 0 ? void 0 : _a.toString) === null || _b === void 0 ? void 0 : _b.call(obj)) === null || _c === void 0 ? void 0 : _c.match(/\s([a-z|A-Z]+)/)) === null || _d === void 0 ? void 0 : _d[1]) === null || _e === void 0 ? void 0 : _e.toLowerCase()) !== null && _f !== void 0 ? _f : "undefined");
};
exports.primitiveType = primitiveType;
//# sourceMappingURL=type.js.map