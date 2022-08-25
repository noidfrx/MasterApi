"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJWT = exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const classes_1 = require("../classes");
const generateJWT = (obj, pass, expiresIn) => {
    return new Promise((resolve) => {
        jsonwebtoken_1.default.sign(obj, pass, {
            expiresIn
        }, (err, token) => {
            if (err)
                resolve((0, classes_1.JWTError)(err));
            else if (!token)
                resolve((0, classes_1.NoTokenError)());
            else
                resolve(token);
        });
    });
};
exports.generateJWT = generateJWT;
const checkJWT = (token, pass) => {
    try {
        if (!token)
            return (0, classes_1.NoTokenError)();
        else if (typeof token === "string") {
            return jsonwebtoken_1.default.verify(token, pass);
        }
        else if (token[0]) {
            return jsonwebtoken_1.default.verify(token[0], pass);
        }
        else
            return (0, classes_1.NoTokenError)();
    }
    catch (err) {
        if (err instanceof Error)
            return (0, classes_1.NoTokenError)(err);
        else
            return (0, classes_1.NoTokenError)();
    }
};
exports.checkJWT = checkJWT;
//# sourceMappingURL=jwt.js.map