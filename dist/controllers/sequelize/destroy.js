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
exports.destroyID = exports.destroyOptions = exports.destroyLimit = exports.destroySimple = void 0;
const helpers_1 = require("../../helpers");
const enums_1 = require("../../enums");
const destroySimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const where = req.body;
    const promise = database.destroy({ where });
    (0, helpers_1.counter)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.destroySimple = destroySimple;
const destroyLimit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const limit = req.params[enums_1.Field.limit];
    const where = req.body;
    const promise = database.destroy({ where, limit });
    (0, helpers_1.counter)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.destroyLimit = destroyLimit;
const destroyOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const promise = database.destroy(req.body);
    (0, helpers_1.counter)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.destroyOptions = destroyOptions;
const destroyID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const { idKey, idValue } = req.params[enums_1.Field.id];
    const promise = database.destroy({ where: { [idKey]: idValue } });
    (0, helpers_1.counter)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.destroyID = destroyID;
//# sourceMappingURL=destroy.js.map