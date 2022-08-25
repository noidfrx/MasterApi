"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeElem = void 0;
const removeElem = (array, elem) => {
    const index = array.indexOf(elem);
    array.splice(index, 1);
    return array;
};
exports.removeElem = removeElem;
//# sourceMappingURL=array.js.map