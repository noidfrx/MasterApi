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
exports.updateID = exports.updateOptions = exports.updateSimple = void 0;
const helpers_1 = require("../../helpers");
const enums_1 = require("../../enums");
const updateSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const attr = req.body[enums_1.Keys.update];
    const where = req.body[enums_1.Keys.where];
    const promise = database.update(attr, { where });
    (0, helpers_1.update)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.updateSimple = updateSimple;
const updateOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const attr = req.body[enums_1.Keys.attr];
    const options = req.body[enums_1.Keys.options];
    const promise = database.update(attr, options);
    (0, helpers_1.update)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.updateOptions = updateOptions;
const updateID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const { idKey, idValue } = req.params[enums_1.Field.id];
    const attr = req.body;
    const promise = database.update(attr, { where: { [idKey]: idValue } });
    (0, helpers_1.update)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.updateID = updateID;
//# sourceMappingURL=update.js.map