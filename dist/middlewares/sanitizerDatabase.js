"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerDatabase = void 0;
const express_validator_1 = require("express-validator");
const sequelize_1 = __importDefault(require("../config/sequelize"));
const enums_1 = require("../enums");
const classes_1 = require("../classes");
const utils_1 = require("../utils");
const sanitizerDatabase = () => {
    return (0, express_validator_1.param)(enums_1.Field.table).custom((input) => {
        return (typeof input === 'string'
            && sequelize_1.default.isDefined(input));
    }).withMessage((value) => {
        if (typeof value === 'string')
            return (0, classes_1.NotFoundError)((0, utils_1.printString)("/$0", [value]));
        else
            return (0, classes_1.NotFoundDatabaseError)(value);
    });
};
exports.sanitizerDatabase = sanitizerDatabase;
//# sourceMappingURL=sanitizerDatabase.js.map