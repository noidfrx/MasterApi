"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerPrimitiveTypes = void 0;
const express_validator_1 = require("express-validator");
const classes_1 = require("../classes");
const utils_1 = require("../utils");
const sanitizerPrimitiveTypes = (fields, type) => {
    return (0, express_validator_1.body)(fields).custom((input) => {
        return type.includes((0, utils_1.primitiveType)(input));
    }).withMessage(() => {
        return (0, classes_1.BadRequestInvalidTypeError)(fields !== null && fields !== void 0 ? fields : "body", type.join(", "));
    });
};
exports.sanitizerPrimitiveTypes = sanitizerPrimitiveTypes;
//# sourceMappingURL=sanitizerPrimitiveType.js.map