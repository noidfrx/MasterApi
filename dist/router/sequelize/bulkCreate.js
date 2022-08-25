"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerBulkCreate = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerBulkCreate = [
    {
        method: 'post',
        path: (0, utils_1.printString)('/:$0/bulkCreate', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.bulkCreateSimple
    }, {
        method: 'post',
        path: (0, utils_1.printString)('/:$0/bulkCreate/options', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.bulkCreateOptions
    }
];
//# sourceMappingURL=bulkCreate.js.map