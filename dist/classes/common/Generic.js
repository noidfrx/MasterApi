"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoTokenError = exports.LoginAuthError = exports.CryptoSealedBoxError = exports.CryptoSignError = exports.JWTError = exports.SequelizeError = exports.NodeFetchError = exports.WrongTypeError = exports.WrongNumberError = exports.NoResultsError = exports.BadRequestInvalidTypeError = exports.BadRequestMandatoryError = exports.BadRequestError = exports.NotFoundPageError = exports.NotFoundIDError = exports.NotFoundDatabaseError = exports.NotFoundError = exports.CustomError = exports.UnknownError = exports.Failed = exports.Success = exports.Response = void 0;
const Message_1 = require("./Message");
const utils_1 = require("../../utils");
class Response {
    constructor(message, payload) {
        this.message = message;
        this.payload = payload;
    }
}
exports.Response = Response;
class Success extends Response {
    constructor(payload) {
        super(Message_1.SuccessOK, payload);
    }
}
exports.Success = Success;
class Failed {
    constructor(title, message, code) {
        this.message = new Message_1.Model(title, message, code);
    }
}
exports.Failed = Failed;
const UnknownError = () => {
    return new Failed("Error", "Unknown error", Message_1.StatusCode.NotFoundCode);
};
exports.UnknownError = UnknownError;
const CustomError = (error) => {
    var _a;
    const statusCode = error["statusCode"];
    const status = error["status"];
    return new Failed(error.name, error.message, (_a = statusCode !== null && statusCode !== void 0 ? statusCode : status) !== null && _a !== void 0 ? _a : Message_1.StatusCode.NotFoundCode);
};
exports.CustomError = CustomError;
const NotFoundError = (path) => {
    return new Failed('Not found error', (0, utils_1.printString)("Path '$0' not found", [path]), Message_1.StatusCode.NotFoundCode);
};
exports.NotFoundError = NotFoundError;
const NotFoundDatabaseError = (database) => {
    return new Failed('Not found error', (0, utils_1.printString)("Database '$0' not found", [database]), Message_1.StatusCode.NotFoundCode);
};
exports.NotFoundDatabaseError = NotFoundDatabaseError;
const NotFoundIDError = (id) => {
    return new Failed('Not found error', (0, utils_1.printString)("ID '$0' not found", [id]), Message_1.StatusCode.NotFoundCode);
};
exports.NotFoundIDError = NotFoundIDError;
const NotFoundPageError = (page) => {
    return new Failed('Not found error', (0, utils_1.printString)("Page '$0' not found", [page.toString()]), Message_1.StatusCode.NotFoundCode);
};
exports.NotFoundPageError = NotFoundPageError;
const BadRequestError = (keys) => {
    return new Failed('Bad request error', (0, utils_1.printString)("Accepted keys {$0}", [keys]), Message_1.StatusCode.BadRequestCode);
};
exports.BadRequestError = BadRequestError;
const BadRequestMandatoryError = (keys) => {
    return new Failed('Bad request error', (0, utils_1.printString)("Mandatory keys {$0}", [keys]), Message_1.StatusCode.BadRequestCode);
};
exports.BadRequestMandatoryError = BadRequestMandatoryError;
const BadRequestInvalidTypeError = (key, type) => {
    return new Failed('Bad request error', (0, utils_1.printString)("key '$0' accepted type '$1'", [key.toString(), type]), Message_1.StatusCode.BadRequestCode);
};
exports.BadRequestInvalidTypeError = BadRequestInvalidTypeError;
const NoResultsError = (msm) => {
    return new Failed('No results error', msm || 'The result of the query is empty', Message_1.StatusCode.BadRequestCode);
};
exports.NoResultsError = NoResultsError;
const WrongNumberError = (num) => {
    return new Failed('Wrong number error', (0, utils_1.printString)("'$0' should be a natural number greater than zero", [num.toString()]), Message_1.StatusCode.BadRequestCode);
};
exports.WrongNumberError = WrongNumberError;
const WrongTypeError = (type) => {
    return new Failed('Wrong type error', (0, utils_1.printString)("Type '$0' does not exist", [type.toString()]), Message_1.StatusCode.BadRequestCode);
};
exports.WrongTypeError = WrongTypeError;
const NodeFetchError = (err) => {
    return new Failed('Node fetch error', err.message, Message_1.StatusCode.InternalServerErrorCode);
};
exports.NodeFetchError = NodeFetchError;
const SequelizeError = (err) => {
    var _a;
    return new Failed('Sequelize error', (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : "err Database", Message_1.StatusCode.InternalServerErrorCode);
};
exports.SequelizeError = SequelizeError;
const JWTError = (err) => {
    return new Failed('JWT error', err.message, Message_1.StatusCode.InternalServerErrorCode);
};
exports.JWTError = JWTError;
const CryptoSignError = (err) => {
    var _a;
    return new Failed('Signature Error', (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : 'Incorrect signature', Message_1.StatusCode.BadRequestCode);
};
exports.CryptoSignError = CryptoSignError;
const CryptoSealedBoxError = (err) => {
    var _a;
    return new Failed('Sealed Box Error', (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : 'Incorrect Sealed Box', Message_1.StatusCode.BadRequestCode);
};
exports.CryptoSealedBoxError = CryptoSealedBoxError;
const LoginAuthError = () => {
    return new Failed('Authorization Error', 'Incorrect email and password', Message_1.StatusCode.BadRequestCode);
};
exports.LoginAuthError = LoginAuthError;
const NoTokenError = (err) => {
    var _a;
    return new Failed("Token Error", (_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : "Token error", Message_1.StatusCode.UnauthorizedCode);
};
exports.NoTokenError = NoTokenError;
//# sourceMappingURL=Generic.js.map