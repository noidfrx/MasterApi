"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enums_1 = require("../enums");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const router = express_1.default.Router();
const routersAuth = [
    {
        method: 'post',
        path: '/login/guest/',
        middlewares: [
            (0, middlewares_1.sanitizerPrimitiveTypes)(enums_1.Keys.uid, ["string"]),
            (0, middlewares_1.sanitizerPossibleKeys)([enums_1.Keys.uid]),
            middlewares_1.validateRequest
        ],
        controller: controllers_1.loginGuest
    }, {
        method: 'post',
        path: '/login/',
        middlewares: [
            middlewares_1.sanitizerSignature,
            (0, middlewares_1.sanitizerSealedBox)(),
            (0, middlewares_1.sanitizerPrimitiveTypes)([enums_1.Keys.uid, enums_1.Keys.code], ["string"]),
            (0, middlewares_1.sanitizerPossibleKeys)([enums_1.Keys.uid, enums_1.Keys.code]),
            middlewares_1.validateRequest
        ],
        controller: controllers_1.login
    }, {
        method: 'get',
        path: '/refreshToken/',
        middlewares: [
            (0, middlewares_1.sanitizerCheckJWTRefresh)(),
            (0, middlewares_1.sanitizerPossibleKeys)([])
        ],
        controller: controllers_1.renewToken
    }
];
routersAuth.forEach((value) => {
    router[value.method](value.path, value.middlewares, value.controller);
});
exports.default = router;
//# sourceMappingURL=auth.js.map