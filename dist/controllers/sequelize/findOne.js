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
exports.findOneOptions = exports.findOneSimple = void 0;
const helpers_1 = require("../../helpers");
const findOneSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const where = req.body;
    const promise = database.findOne({ where });
    (0, helpers_1.selectOne)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findOneSimple = findOneSimple;
const findOneOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const promise = database.findOne(req.body);
    (0, helpers_1.selectOne)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findOneOptions = findOneOptions;
//# sourceMappingURL=findOne.js.map