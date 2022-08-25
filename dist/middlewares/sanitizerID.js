"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerID = void 0;
const express_validator_1 = require("express-validator");
const enums_1 = require("../enums");
const classes_1 = require("../classes");
const helpers_1 = require("../helpers");
const sanitizerID = () => {
    return (0, express_validator_1.param)(enums_1.Field.id).customSanitizer((input, meta) => {
        const database = (0, helpers_1.getDatabase)(meta);
        if (database instanceof classes_1.Failed)
            return input;
        const idKey = database.primaryKeyAttribute;
        return { idKey, idValue: input };
    }).custom((input) => {
        const { idKey, idValue } = input;
        return (idKey && idValue);
    }).withMessage((value, meta) => {
        const database = (0, helpers_1.getDatabase)(meta);
        if (database instanceof classes_1.Failed)
            return database;
        else
            return (0, classes_1.NotFoundIDError)(value);
    });
};
exports.sanitizerID = sanitizerID;
//# sourceMappingURL=sanitizerID.js.map