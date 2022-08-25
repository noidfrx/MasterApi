"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUpdate = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerUpdate = [
    {
        method: 'put',
        path: (0, utils_1.printString)('/:$0', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.updateSimple
    }, {
        method: 'put',
        path: (0, utils_1.printString)('/:$0/options', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.updateOptions
    }, {
        method: 'put',
        path: (0, utils_1.printString)('/:$0/:$1', [enums_1.Field.table, enums_1.Field.id]),
        middlewares: middlewares_1.middlewaresID,
        controller: controllers_1.updateID
    }
];
//# sourceMappingURL=update.js.map