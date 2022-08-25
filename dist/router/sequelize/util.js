"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerUtil = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerUtil = [
    {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/:$1/:$2', [enums_1.Field.table, enums_1.Field.method, enums_1.Field.attr]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.utilSimple
    }
];
//# sourceMappingURL=util.js.map