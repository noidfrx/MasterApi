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
exports.update = exports.selectOrCreate = exports.selectOne = exports.promiseOne = exports.counter = exports.method = exports.promiseDefault = void 0;
const classes_1 = require("../classes");
const promiseDefault = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    return promise.then((response) => {
        return new classes_1.Success(response);
    }).catch((err) => {
        return (0, classes_1.SequelizeError)(err);
    });
});
exports.promiseDefault = promiseDefault;
const method = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    return promise.then(([response]) => {
        return new classes_1.Success(response);
    }).catch((err) => {
        return (0, classes_1.SequelizeError)(err);
    });
});
exports.method = method;
const counter = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    return promise.then((count) => {
        return new classes_1.Success({ count });
    }).catch((err) => {
        return (0, classes_1.SequelizeError)(err);
    });
});
exports.counter = counter;
const promiseOne = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    return promise.then((response) => {
        const row = response.pop();
        if (row)
            return new classes_1.Success(row);
        else
            return (0, classes_1.NoResultsError)();
    }).catch((err) => {
        return (0, classes_1.SequelizeError)(err);
    });
});
exports.promiseOne = promiseOne;
const selectOne = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    return promise.then((row) => {
        if (row)
            return new classes_1.Success(row);
        else
            return (0, classes_1.NoResultsError)();
    }).catch((err) => {
        return (0, classes_1.SequelizeError)(err);
    });
});
exports.selectOne = selectOne;
const selectOrCreate = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    return promise.then(([row, isCreate]) => {
        return new classes_1.Success({ row, isCreate });
    }).catch((err) => {
        return (0, classes_1.SequelizeError)(err);
    });
});
exports.selectOrCreate = selectOrCreate;
const update = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    return promise.then(([count, rows]) => {
        return new classes_1.Success({ rows, count });
    }).catch((err) => {
        return (0, classes_1.SequelizeError)(err);
    });
});
exports.update = update;
//# sourceMappingURL=resolve.js.map