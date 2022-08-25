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
exports.countOptions = exports.countSimple = void 0;
const helpers_1 = require("../../helpers");
const countSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const where = req.body;
    const promise = database.count({ where });
    (0, helpers_1.counter)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.countSimple = countSimple;
const countOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const promise = database.count(req.body);
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.countOptions = countOptions;
//# sourceMappingURL=count.js.map