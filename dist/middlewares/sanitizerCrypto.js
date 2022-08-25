"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerSealedBox = exports.sanitizerSignature = void 0;
const environment_1 = require("../environment");
const classes_1 = require("../classes");
const helpers_1 = require("../helpers");
const express_validator_1 = require("express-validator");
const enums_1 = require("../enums");
const sanitizerSignature = (req, res, next) => {
    const sign = req.header(enums_1.Header.signHeader);
    const isValid = (0, helpers_1.isValidSignatureRequest)(sign, req.body, environment_1.signSecret);
    if (isValid instanceof classes_1.Failed) {
        res.status(isValid.message.code).json(isValid);
    }
    else if (!isValid) {
        const fail = (0, classes_1.CryptoSignError)();
        res.status(fail.message.code).json(fail);
    }
    else {
        next();
    }
};
exports.sanitizerSignature = sanitizerSignature;
const sanitizerSealedBox = () => {
    return (0, express_validator_1.body)(enums_1.Keys.sealedBox).customSanitizer((input) => {
        return (0, helpers_1.openSealedBoxRequest)(input, environment_1.sealSecret);
    }).custom((input) => {
        return (input && !(input instanceof classes_1.Failed));
    }).withMessage((value) => {
        if (value instanceof classes_1.Failed)
            return value;
        else
            return (0, classes_1.UnknownError)();
    });
};
exports.sanitizerSealedBox = sanitizerSealedBox;
//# sourceMappingURL=sanitizerCrypto.js.map