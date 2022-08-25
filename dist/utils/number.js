"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberLimitMin = exports.getNumber = void 0;
const getNumber = (num, option = 0) => {
    var _a;
    const aux = (_a = parseInt(num !== null && num !== void 0 ? num : option.toString(), 10)) !== null && _a !== void 0 ? _a : option;
    if (isNaN(aux))
        return option;
    else
        return aux;
};
exports.getNumber = getNumber;
const getNumberLimitMin = (num, min) => {
    var _a;
    const aux = (_a = parseInt(num !== null && num !== void 0 ? num : min.toString(), 10)) !== null && _a !== void 0 ? _a : min;
    if (isNaN(aux))
        return undefined;
    else if (min > aux)
        return undefined;
    else
        return aux;
};
exports.getNumberLimitMin = getNumberLimitMin;
//# sourceMappingURL=number.js.map