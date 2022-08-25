"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizerCheckJWTRefresh = exports.sanitizerCheckJWTAccess = void 0;
const environment_1 = require("../environment");
const classes_1 = require("../classes");
const helpers_1 = require("../helpers");
const enums_1 = require("../enums");
const sanitizerCheckJWT = (pass) => {
    return (req, res, next) => {
        const token = req.header(enums_1.Header.jwtHeader);
        const payload = (0, helpers_1.checkJWT)(token, pass);
        if (payload instanceof classes_1.Failed) {
            res.status(payload.message.code).json(payload);
        }
        else {
            req.headers[enums_1.Header.auth] = payload.auth;
            next();
        }
    };
};
const sanitizerCheckJWTAccess = () => {
    return sanitizerCheckJWT(environment_1.jwtAccessSecret);
};
exports.sanitizerCheckJWTAccess = sanitizerCheckJWTAccess;
const sanitizerCheckJWTRefresh = () => {
    return sanitizerCheckJWT(environment_1.jwtRefreshSecret);
};
exports.sanitizerCheckJWTRefresh = sanitizerCheckJWTRefresh;
//# sourceMappingURL=sanitizerCheckJWT.js.map