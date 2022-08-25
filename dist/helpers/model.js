"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMandatoryKeys = void 0;
const getMandatoryKeys = (database) => {
    const attr = Object.values(database.rawAttributes);
    return attr.map(val => {
        var _a, _b, _c, _d;
        if (((_a = val.autoIncrement) !== null && _a !== void 0 ? _a : false) ||
            ((_b = val.autoIncrementIdentity) !== null && _b !== void 0 ? _b : false) ||
            ((_c = val.allowNull) !== null && _c !== void 0 ? _c : true) ||
            (val.defaultValue !== undefined))
            return "";
        else
            return (_d = val.field) !== null && _d !== void 0 ? _d : "";
    }).filter((val) => {
        return val !== "";
    });
};
exports.getMandatoryKeys = getMandatoryKeys;
//# sourceMappingURL=model.js.map