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
exports.incrementOptions = exports.incrementSimple = void 0;
const helpers_1 = require("../../helpers");
const enums_1 = require("../../enums");
const incrementSimple = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const attr = req.params[enums_1.Field.attr];
    const value = req.params[enums_1.Field.value];
    const where = req.body;
    const promise = database.increment(attr, { by: value, where });
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.incrementSimple = incrementSimple;
const incrementOptions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const database = (0, helpers_1.unwrapsDatabase)(req);
    const attr = req.body[enums_1.Keys.attr];
    const options = req.body[enums_1.Keys.options];
    const promise = database.increment(attr, options);
    (0, helpers_1.promiseDefault)(promise).then((response) => {
        res.status(response.message.code).json(response);
    });
});
exports.incrementOptions = incrementOptions;
//# sourceMappingURL=increment.js.map