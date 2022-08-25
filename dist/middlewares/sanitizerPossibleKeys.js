"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerPossibleKeys = void 0;
const express_validator_1 = require("express-validator");
const classes_1 = require("../classes");
const utils_1 = require("../utils");
const sanitizerPossibleKeys = (keys, fields) => {
    return (0, express_validator_1.body)(fields).custom((input) => {
        if (!input)
            return undefined;
        const bodyDictionary = (0, utils_1.getDictionaryWithKeys)(keys, input);
        const bodyKeys = Object.keys(input);
        const bodyDictionaryKeys = Object.keys(bodyDictionary);
        return (bodyKeys.length === bodyDictionaryKeys.length);
    }).withMessage(() => {
        const text = keys.join(", ");
        if (fields)
            return (0, classes_1.BadRequestError)((0, utils_1.printString)("$0:{$1}", [fields.toString(), text]));
        else
            return (0, classes_1.BadRequestError)((0, utils_1.printString)("$0", [text]));
    });
};
exports.sanitizerPossibleKeys = sanitizerPossibleKeys;
//# sourceMappingURL=sanitizerPossibleKeys.js.map