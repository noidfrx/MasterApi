"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerAttr = void 0;
const express_validator_1 = require("express-validator");
const utils_1 = require("../utils");
const classes_1 = require("../classes");
const helpers_1 = require("../helpers");
const sanitizerAttr = (fields) => {
    return (0, express_validator_1.body)(fields).custom((input, meta) => {
        if (!input)
            return true;
        const database = (0, helpers_1.getDatabase)(meta);
        if (database instanceof classes_1.Failed)
            return false;
        const databaseAllKeys = Object.keys(database.rawAttributes);
        return (0, utils_1.isOptionalObject)(input, databaseAllKeys);
    }).withMessage((_, meta) => {
        const database = (0, helpers_1.getDatabase)(meta);
        if (database instanceof classes_1.Failed)
            return database;
        const keys = Object.keys(database.rawAttributes).join(", ");
        if (fields)
            return (0, classes_1.BadRequestError)((0, utils_1.printString)("$0:{$1}", [fields.toString(), keys]));
        else
            return (0, classes_1.BadRequestError)((0, utils_1.printString)("$0", [keys]));
    });
};
exports.sanitizerAttr = sanitizerAttr;
//# sourceMappingURL=sanitizerAttr.js.map