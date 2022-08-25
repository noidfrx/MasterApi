"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerMandatory = void 0;
const express_validator_1 = require("express-validator");
const classes_1 = require("../classes");
const utils_1 = require("../utils");
const sanitizerMandatory = (keys, fields) => {
    return (0, express_validator_1.body)(fields).custom((input) => {
        if (!input)
            return false;
        return (0, utils_1.isExactObject)(input, keys);
    }).withMessage(() => {
        const text = keys.join(", ");
        if (fields)
            return (0, classes_1.BadRequestError)((0, utils_1.printString)("$0:{$1}", [fields.toString(), text]));
        else
            return (0, classes_1.BadRequestError)((0, utils_1.printString)("$0", [text]));
    });
};
exports.sanitizerMandatory = sanitizerMandatory;
//# sourceMappingURL=sanitizerMandatory.js.map