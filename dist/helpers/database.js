"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapsDatabase = exports.getDatabase = void 0;
const classes_1 = require("../classes");
const enums_1 = require("../enums");
const sequelize_1 = __importDefault(require("../config/sequelize"));
const getDatabase = (meta) => {
    var _a;
    const nameDatabase = (_a = meta.req.params) === null || _a === void 0 ? void 0 : _a[enums_1.Field.table];
    if (typeof nameDatabase !== 'string')
        return (0, classes_1.UnknownError)();
    if (!sequelize_1.default.isDefined(nameDatabase))
        return (0, classes_1.NotFoundDatabaseError)(nameDatabase);
    return sequelize_1.default.model(nameDatabase);
};
exports.getDatabase = getDatabase;
const unwrapsDatabase = (req) => {
    var _a;
    const nameDatabase = (_a = req.params) === null || _a === void 0 ? void 0 : _a[enums_1.Field.table];
    return sequelize_1.default.model(nameDatabase);
};
exports.unwrapsDatabase = unwrapsDatabase;
//# sourceMappingURL=database.js.map