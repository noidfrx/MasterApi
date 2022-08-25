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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewAuth = exports.loginAuth = exports.loginGuestAuth = void 0;
const classes_1 = require("../classes");
const environment_1 = require("../environment");
const jwt_1 = require("./jwt");
const ms_1 = __importDefault(require("ms"));
const loginGuestAuth = (auth) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, exports.renewAuth)(auth);
});
exports.loginGuestAuth = loginGuestAuth;
const loginAuth = (authUid, authCode) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, classes_1.UnknownError)();
});
exports.loginAuth = loginAuth;
const renewAuth = (auth) => __awaiter(void 0, void 0, void 0, function* () {
    const time = (0, ms_1.default)(environment_1.jwtTime) / 1000;
    const accessToken = yield (0, jwt_1.generateJWT)({ auth }, environment_1.jwtAccessSecret, time / 2);
    const refreshToken = yield (0, jwt_1.generateJWT)({ auth }, environment_1.jwtRefreshSecret, time);
    if (accessToken instanceof classes_1.Failed)
        return accessToken;
    else if (refreshToken instanceof classes_1.Failed)
        return refreshToken;
    else
        return new classes_1.Success({ accessToken, refreshToken });
});
exports.renewAuth = renewAuth;
//# sourceMappingURL=authToken.js.map