"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewToken = exports.login = exports.loginGuest = void 0;
const helpers_1 = require("../helpers");
const enums_1 = require("../enums");
const loginGuest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uid = req.body[enums_1.Keys.uid];
    (0, helpers_1.loginGuestAuth)(uid).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.loginGuest = loginGuest;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uid = req.body[enums_1.Keys.uid];
    const code = req.body[enums_1.Keys.code];
    (0, helpers_1.loginAuth)(uid, code).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.login = login;
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const auth = req.header(enums_1.Header.auth);
    (0, helpers_1.renewAuth)(auth).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.renewToken = renewToken;
//# sourceMappingURL=auth.js.map