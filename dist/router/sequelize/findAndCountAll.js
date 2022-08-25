"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerFindAndCountAll = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerFindAndCountAll = [
    {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/search', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.findAndCountAllSimple
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/search/all', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.findAndCountAllIncludeAll
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/search/options', [enums_1.Field.table]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.findAndCountAllOptions
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/search/all/:$1', [enums_1.Field.table, enums_1.Field.page]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.findAndCountAllPaginatedIncludeAll
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/search/:$1', [enums_1.Field.table, enums_1.Field.page]),
        middlewares: middlewares_1.middlewaresBasic,
        controller: controllers_1.findAndCountAllPaginated
    }
];
//# sourceMappingURL=findAndCountAll.js.map