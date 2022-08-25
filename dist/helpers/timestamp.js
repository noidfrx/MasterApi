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
exports.TimestampSimple = exports.TimestampQuery = void 0;
const utils_1 = require("../utils");
const enums_1 = require("../enums");
function TimestampQuery(data, query, callback, timeRefresh = enums_1.Constant.refresh) {
    return __awaiter(this, void 0, void 0, function* () {
        const searchQuery = (value) => {
            const jsonValue = JSON.stringify(value.query);
            const jsonQuery = JSON.stringify(query);
            return jsonValue === jsonQuery;
        };
        const newTime = (0, utils_1.addHours)(-timeRefresh);
        const newData = data.filter((value) => {
            return value.create > newTime;
        });
        const result = newData.find(searchQuery);
        if (result) {
            const index = newData.findIndex(searchQuery);
            return {
                newData,
                response: result.response,
                index,
                isNew: false
            };
        }
        else {
            return callback(query).then((response) => {
                const newIndex = newData.push({
                    query,
                    response,
                    create: new Date()
                });
                return {
                    newData,
                    response,
                    index: newIndex - 1,
                    isNew: true
                };
            });
        }
    });
}
exports.TimestampQuery = TimestampQuery;
function TimestampSimple(data, callback, timeRefresh = enums_1.Constant.refresh) {
    return __awaiter(this, void 0, void 0, function* () {
        const newDate = (0, utils_1.addHours)(-timeRefresh);
        if (data.create > newDate) {
            return callback().then((response) => {
                return {
                    response,
                    create: new Date()
                };
            });
        }
        else
            return data;
    });
}
exports.TimestampSimple = TimestampSimple;
//# sourceMappingURL=timestamp.js.map