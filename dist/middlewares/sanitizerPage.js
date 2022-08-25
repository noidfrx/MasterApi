"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerPage = void 0;
const express_validator_1 = require("express-validator");
const utils_1 = require("../utils");
const enums_1 = require("../enums");
const classes_1 = require("../classes");
const sanitizerPage = () => {
    return (0, express_validator_1.param)(enums_1.Field.page).customSanitizer((input) => {
        if (!(typeof input === "string"))
            return input;
        const page = (0, utils_1.getNumberLimitMin)(input, 1);
        if (!page)
            return (0, utils_1.printString)("/$0", [input]);
        return page;
    }).isNumeric().withMessage((value) => {
        return (0, classes_1.NotFoundPageError)(value);
    });
};
exports.sanitizerPage = sanitizerPage;
//# sourceMappingURL=sanitizerPage.js.map