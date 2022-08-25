"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("./sequelize");
const router = express_1.default.Router();
const routersPost = [
    ...sequelize_1.routerBulkCreate,
    ...sequelize_1.routerFindOrCreate,
    ...sequelize_1.routerCreate,
];
const routersGet = [
    ...sequelize_1.routerQuerySQL,
    ...sequelize_1.routerSP,
    ...sequelize_1.routerDescribe,
    ...sequelize_1.routerFindOne,
    ...sequelize_1.routerFindAndCountAll,
    ...sequelize_1.routerCount,
    ...sequelize_1.routerFindAll,
    ...sequelize_1.routerFindByPk,
    ...sequelize_1.routerUtil
];
const routersPut = [
    ...sequelize_1.routerIncrement,
    ...sequelize_1.routerUpdate,
];
const routersDelete = [
    ...sequelize_1.routerDestroy
];
const routersDatabase = [
    ...routersPost,
    ...routersGet,
    ...routersPut,
    ...routersDelete
];
routersDatabase.forEach((value) => {
    router[value.method](value.path, value.middlewares, value.controller);
});
exports.default = router;
//# sourceMappingURL=database.js.map