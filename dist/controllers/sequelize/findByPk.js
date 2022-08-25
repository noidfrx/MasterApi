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
exports.findByPkOptions = exports.findByPkSimple = void 0;
const helpers_1 = require("../../helpers");
const enums_1 = require("../../enums");
const findByPkSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idValue } = req.params[enums_1.Field.id];
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const promise = database.findByPk(idValue);
    (0, helpers_1.selectOne)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findByPkSimple = findByPkSimple;
const findByPkOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idValue } = req.params[enums_1.Field.id];
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const promise = database.findByPk(idValue, req.body);
    (0, helpers_1.selectOne)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findByPkOptions = findByPkOptions;
//# sourceMappingURL=findByPk.js.map