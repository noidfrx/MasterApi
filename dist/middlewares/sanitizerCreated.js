"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerCreated = void 0;
const express_validator_1 = require("express-validator");
const helpers_1 = require("../helpers");
const utils_1 = require("../utils");
const classes_1 = require("../classes");
const sanitizerCreated = (fields) => {
    return (0, express_validator_1.body)(fields).custom((input, meta) => {
        const database = (0, helpers_1.getDatabase)(meta);
        if (database instanceof classes_1.Failed)
            return false;
        const mandatoryAllKeys = (0, helpers_1.getMandatoryKeys)(database);
        if (!input)
            return mandatoryAllKeys.length === 0;
        return (0, utils_1.isExactObject)(input, mandatoryAllKeys);
    }).withMessage((value, meta) => {
        const database = (0, helpers_1.getDatabase)(meta);
        if (database instanceof classes_1.Failed)
            return database;
        const mandatoryAllKeys = (0, helpers_1.getMandatoryKeys)(database);
        const keys = mandatoryAllKeys.join(", ");
        if (fields)
            return (0, classes_1.BadRequestMandatoryError)((0, utils_1.printString)("$0:{$1}", [fields.toString(), keys]));
        else
            return (0, classes_1.BadRequestMandatoryError)((0, utils_1.printString)("$0", [keys]));
    });
};
exports.sanitizerCreated = sanitizerCreated;
//# sourceMappingURL=sanitizerCreated.js.map