"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoolean = void 0;
const getBoolean = (value) => {
    switch (value) {
        case true:
        case "true":
        case 1:
        case "1":
        case "on":
        case "yes":
            return true;
        default:
            return false;
    }
};
exports.getBoolean = getBoolean;
//# sourceMappingURL=boolean.js.map