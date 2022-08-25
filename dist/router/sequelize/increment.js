"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerIncrement = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerIncrement = [
    {
        method: 'put',
        path: (0, utils_1.printString)('/:$0/increment/options', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.incrementOptions
    }, {
        method: 'put',
        path: (0, utils_1.printString)('/:$0/increment/:$1/:$2', [enums_1.Field.table, enums_1.Field.attr, enums_1.Field.value]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.incrementSimple
    }
];
//# sourceMappingURL=increment.js.map