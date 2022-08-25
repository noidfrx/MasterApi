"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerFindOrCreate = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerFindOrCreate = [
    {
        method: 'post',
        path: (0, utils_1.printString)('/:$0/searchOrCreate', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.findOrCreateSimple
    }, {
        method: 'post',
        path: (0, utils_1.printString)('/:$0/searchOrCreate/options', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.findOrCreateOptions
    }
];
//# sourceMappingURL=findOrCreate.js.map