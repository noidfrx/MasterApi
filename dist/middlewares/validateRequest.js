"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const classes_1 = require("../classes");
const validateRequest = (req, res, next) => {
    var _a;
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        next();
    }
    else {
        const error = errors.array({ onlyFirstError: true }).reverse().pop();
        const fail = (_a = error === null || error === void 0 ? void 0 : error.msg) !== null && _a !== void 0 ? _a : (0, classes_1.UnknownError)();
        res.status(fail.message.code).json(fail);
    }
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validateRequest.js.map