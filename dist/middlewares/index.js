"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewaresID = exports.middlewaresBasic = exports.middlewaresMin = void 0;
const sanitizerCheckJWT_1 = require("./sanitizerCheckJWT");
const sanitizerDatabase_1 = require("./sanitizerDatabase");
const validateRequest_1 = require("./validateRequest");
const sanitizerID_1 = require("./sanitizerID");
__exportStar(require("./sanitizerAttr"), exports);
__exportStar(require("./sanitizerCheckJWT"), exports);
__exportStar(require("./sanitizerCreated"), exports);
__exportStar(require("./sanitizerDatabase"), exports);
__exportStar(require("./sanitizerID"), exports);
__exportStar(require("./sanitizerMandatory"), exports);
__exportStar(require("./sanitizerPossibleKeys"), exports);
__exportStar(require("./sanitizerPage"), exports);
__exportStar(require("./sanitizerCrypto"), exports);
__exportStar(require("./sanitizerPrimitiveType"), exports);
__exportStar(require("./validateRequest"), exports);
exports.middlewaresMin = [
    (0, sanitizerCheckJWT_1.sanitizerCheckJWTAccess)(),
    validateRequest_1.validateRequest
];
exports.middlewaresBasic = [
    (0, sanitizerCheckJWT_1.sanitizerCheckJWTAccess)(),
    (0, sanitizerDatabase_1.sanitizerDatabase)(),
    validateRequest_1.validateRequest
];
exports.middlewaresID = [
    (0, sanitizerCheckJWT_1.sanitizerCheckJWTAccess)(),
    (0, sanitizerID_1.sanitizerID)(),
    validateRequest_1.validateRequest
];
//# sourceMappingURL=index.js.map