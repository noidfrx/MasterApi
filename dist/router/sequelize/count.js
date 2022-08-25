"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCount = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerCount = [
    {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/count', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.countSimple
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/count/options', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.countOptions
    }
];
//# sourceMappingURL=count.js.map