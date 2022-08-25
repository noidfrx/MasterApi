"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerDestroy = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerDestroy = [
    {
        method: 'delete',
        path: (0, utils_1.printString)('/:$0', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.destroySimple
    }, {
        method: 'delete',
        path: (0, utils_1.printString)('/:$0/limit/:$1', [enums_1.Field.table, enums_1.Field.limit]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.destroyLimit
    }, {
        method: 'delete',
        path: (0, utils_1.printString)('/:$0/options', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.destroyOptions
    }, {
        method: 'delete',
        path: (0, utils_1.printString)('/:$0/:$1', [enums_1.Field.table, enums_1.Field.id]),
        middlewares: middlewares_1.middlewaresID,
        controller: controllers_1.destroyID
    }
];
//# sourceMappingURL=destroy.js.map