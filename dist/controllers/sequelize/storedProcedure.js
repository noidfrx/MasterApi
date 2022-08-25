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
exports.callOptions = exports.callSimple = exports.funcOptions = exports.funcSimple = void 0;
const helpers_1 = require("../../helpers");
const enums_1 = require("../../enums");
const funcSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const name = (_a = req.params[enums_1.Field.name]) !== null && _a !== void 0 ? _a : "";
    const request = req.body;
    const promise = (0, helpers_1.funcSP)(name, request);
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.funcSimple = funcSimple;
const funcOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const name = (_b = req.params[enums_1.Field.name]) !== null && _b !== void 0 ? _b : "";
    const request = req.body[enums_1.Keys.request];
    const options = req.body[enums_1.Keys.options];
    const promise = (0, helpers_1.funcSP)(name, request, options);
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.funcOptions = funcOptions;
const callSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const name = (_c = req.params[enums_1.Field.name]) !== null && _c !== void 0 ? _c : "";
    const request = req.body;
    const promise = (0, helpers_1.callSP)(name, request);
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.callSimple = callSimple;
const callOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const name = (_d = req.params[enums_1.Field.name]) !== null && _d !== void 0 ? _d : "";
    const request = req.body[enums_1.Keys.request];
    const options = req.body[enums_1.Keys.options];
    const promise = (0, helpers_1.callSP)(name, request, options);
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.callOptions = callOptions;
//# sourceMappingURL=storedProcedure.js.map