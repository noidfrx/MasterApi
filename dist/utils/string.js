"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printStringDictionary = exports.printStringArray = exports.printString = exports.escapeString = exports.getString = void 0;
const type_1 = require("./type");
const getString = (obj) => {
    return JSON.stringify(obj);
};
exports.getString = getString;
const escapeString = (text) => {
    const separator = [" ", "."];
    separator.forEach((value) => {
        text = text.trim().split(value).map((value) => {
            if (value.length === 0)
                return value;
            if (!value.startsWith("\"")) {
                value = "\"" + value;
            }
            if (!value.endsWith("\"")) {
                value = value + "\"";
            }
            return value;
        }).join(value);
    });
    return text;
};
exports.escapeString = escapeString;
const printString = (text, replacements, symbol = "$") => {
    const primitiveValue = (0, type_1.primitiveType)(replacements);
    if (primitiveValue === "array") {
        return (0, exports.printStringArray)(text, replacements, symbol);
    }
    else if (primitiveValue === "object") {
        return (0, exports.printStringDictionary)(text, replacements, symbol);
    }
    else {
        return text;
    }
};
exports.printString = printString;
const printStringArray = (text, replacements, symbol = "$") => {
    replacements.forEach((value, index) => {
        const array = text.split(symbol + index);
        if (typeof value === "string") {
            text = array.join(value);
        }
        else {
            text = array.join(value[1] ? (0, exports.escapeString)(value[0]) : value[0]);
        }
    });
    return text;
};
exports.printStringArray = printStringArray;
const printStringDictionary = (text, replacements, symbol = "$") => {
    var _a;
    for (const key in replacements) {
        const value = (_a = replacements[key]) !== null && _a !== void 0 ? _a : "";
        const array = text.split(symbol + key);
        if (typeof value === "string") {
            text = array.join(value);
        }
        else {
            text = array.join(value[1] ? (0, exports.escapeString)(value[0]) : value[0]);
        }
    }
    return text;
};
exports.printStringDictionary = printStringDictionary;
//# sourceMappingURL=string.js.map