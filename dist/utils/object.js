"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExactObject = exports.isOptionalObject = exports.getDictionaryWithKeys = void 0;
const getDictionaryWithKeys = (keys, obj) => {
    const array = keys.map((val) => {
        const aux = obj[val];
        if (!aux)
            return {};
        else
            return { [val]: obj[val] };
    });
    return Object.assign({}, ...array);
};
exports.getDictionaryWithKeys = getDictionaryWithKeys;
const isOptionalObject = (obj, keys) => {
    const objKeys = Object.keys(obj);
    const objDictionary = (0, exports.getDictionaryWithKeys)(keys, obj);
    const objDictionaryKeys = Object.keys(objDictionary);
    return objKeys.length === objDictionaryKeys.length;
};
exports.isOptionalObject = isOptionalObject;
const isExactObject = (obj, keys) => {
    const objDictionary = (0, exports.getDictionaryWithKeys)(keys, obj);
    const objDictionaryKeys = Object.keys(objDictionary);
    return objDictionaryKeys.length === keys.length;
};
exports.isExactObject = isExactObject;
//# sourceMappingURL=object.js.map