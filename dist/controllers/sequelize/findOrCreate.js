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
exports.findOrCreateOptions = exports.findOrCreateSimple = void 0;
const helpers_1 = require("../../helpers");
const enums_1 = require("../../enums");
const findOrCreateSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const where = req.body[enums_1.Keys.where];
    const defaults = req.body[enums_1.Keys.defaults];
    const promise = database.findOrCreate({ where, defaults });
    (0, helpers_1.selectOrCreate)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findOrCreateSimple = findOrCreateSimple;
const findOrCreateOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const promise = database.findOrCreate(req.body);
    (0, helpers_1.selectOrCreate)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.findOrCreateOptions = findOrCreateOptions;
//# sourceMappingURL=findOrCreate.js.map