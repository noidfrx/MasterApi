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
exports.querySQLOptions = exports.querySQLSimple = void 0;
const helpers_1 = require("../../helpers");
const enums_1 = require("../../enums");
const utils_1 = require("../../utils");
const sequelize_1 = __importDefault(require("../../config/sequelize"));
const querySQLSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const text = req.body[enums_1.Keys.sql];
    const replacements = req.body[enums_1.Keys.replacements];
    const sql = (0, utils_1.printString)(text, replacements, ":");
    const promise = sequelize_1.default.query(sql, { nest: true, raw: true });
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.querySQLSimple = querySQLSimple;
const querySQLOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const text = req.body[enums_1.Keys.sql];
    const replacements = req.body[enums_1.Keys.replacements];
    const sql = (0, utils_1.printString)(text, replacements, ":");
    const options = req.body[enums_1.Keys.options];
    const promise = sequelize_1.default.query(sql, options);
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.querySQLOptions = querySQLOptions;
//# sourceMappingURL=querySQL.js.map