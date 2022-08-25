"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerQuerySQL = void 0;
const utils_1 = require("../../utils");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerQuerySQL = [
    {
        method: 'get',
        path: (0, utils_1.printString)('/sql'),
        middlewares: middlewares_1.middlewaresMin,
        controller: controllers_1.querySQLSimple
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/sql/options'),
        middlewares: middlewares_1.middlewaresMin,
        controller: controllers_1.querySQLOptions
    }
];
//# sourceMappingURL=querySQL.js.map