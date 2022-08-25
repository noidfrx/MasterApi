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
exports.callSP = exports.funcSP = void 0;
const sequelize_1 = __importDefault(require("../config/sequelize"));
const querySP = (name, request, sql, options) => __awaiter(void 0, void 0, void 0, function* () {
    const aux = name;
    const keys = Object.keys(request);
    const text = keys.map((elem) => {
        return ":" + elem;
    }).join(",");
    const sqlFinal = `${sql} "${aux}"(${text})`;
    return sequelize_1.default.query(sqlFinal, Object.assign(Object.assign({}, options), { replacements: request }));
});
const funcSP = (name, request, options = { nest: true, raw: true }) => __awaiter(void 0, void 0, void 0, function* () {
    return querySP(name, request, "select * from", options);
});
exports.funcSP = funcSP;
const callSP = (name, request, options = { nest: true, raw: true }) => __awaiter(void 0, void 0, void 0, function* () {
    return querySP(name, request, "call", options);
});
exports.callSP = callSP;
//# sourceMappingURL=storedProcedure.js.map