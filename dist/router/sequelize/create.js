"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerCreate = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerCreate = [
    {
        method: 'post',
        path: (0, utils_1.printString)('/:$0', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.createSimple
    }, {
        method: 'post',
        path: (0, utils_1.printString)('/:$0/options', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.createOptions
    }
];
//# sourceMappingURL=create.js.map