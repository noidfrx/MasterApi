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
exports.findAndCountAllPaginatedIncludeAll = exports.findAndCountAllPaginated = exports.findAndCountAllOptions = exports.findAndCountAllIncludeAll = exports.findAndCountAllSimple = void 0;
const enums_1 = require("../../enums");
const helpers_1 = require("../../helpers");
const findAndCountAllSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const where = req.body;
    const promise = database.findAndCountAll({ where });
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findAndCountAllSimple = findAndCountAllSimple;
const findAndCountAllIncludeAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const where = req.body;
    const promise = database.findAndCountAll({
        where, include: { all: true }
    });
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findAndCountAllIncludeAll = findAndCountAllIncludeAll;
const findAndCountAllOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const promise = database.findAndCountAll(req.body);
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findAndCountAllOptions = findAndCountAllOptions;
const findAndCountAllPaginated = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const where = req.body;
    const pag = (_a = req.params) === null || _a === void 0 ? void 0 : _a[enums_1.Field.page];
    const limit = enums_1.Constant.limit;
    const offset = limit * (pag - 1);
    const promise = database.findAndCountAll({
        where, limit, offset
    });
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findAndCountAllPaginated = findAndCountAllPaginated;
const findAndCountAllPaginatedIncludeAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const where = req.body[enums_1.Keys.where];
    const pag = req.params[enums_1.Field.page];
    const limit = enums_1.Constant.limit;
    const offset = limit * (pag - 1);
    const promise = database.findAndCountAll({
        where, limit, offset,
        include: { all: true }
    });
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findAndCountAllPaginatedIncludeAll = findAndCountAllPaginatedIncludeAll;
//# sourceMappingURL=findAndCountAll.js.map