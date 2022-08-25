"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessOK = exports.Model = exports.StatusCode = void 0;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ContinueCode"] = 100] = "ContinueCode";
    StatusCode[StatusCode["OKCode"] = 200] = "OKCode";
    StatusCode[StatusCode["CreatedCode"] = 201] = "CreatedCode";
    StatusCode[StatusCode["NotModifiedCode"] = 304] = "NotModifiedCode";
    StatusCode[StatusCode["BadRequestCode"] = 400] = "BadRequestCode";
    StatusCode[StatusCode["UnauthorizedCode"] = 401] = "UnauthorizedCode";
    StatusCode[StatusCode["NotFoundCode"] = 404] = "NotFoundCode";
    StatusCode[StatusCode["RequestTimeoutCode"] = 408] = "RequestTimeoutCode";
    StatusCode[StatusCode["InternalServerErrorCode"] = 500] = "InternalServerErrorCode";
    StatusCode[StatusCode["BadGatewayCode"] = 502] = "BadGatewayCode";
    StatusCode[StatusCode["GatewayTimeoutCode"] = 504] = "GatewayTimeoutCode";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
class Model {
    constructor(title, message, code) {
        this.code = code.valueOf();
        this.title = title;
        this.message = message;
    }
}
exports.Model = Model;
exports.SuccessOK = new Model('Success', 'Successful response', StatusCode.OKCode);
//# sourceMappingURL=Message.js.map