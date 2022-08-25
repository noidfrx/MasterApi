"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerFindByPk = void 0;
const utils_1 = require("../../utils");
const enums_1 = require("../../enums");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
exports.routerFindByPk = [
    {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/:$1', [enums_1.Field.table, enums_1.Field.id]),
        middlewares: middlewares_1.middlewaresID,
        controller: controllers_1.findByPkSimple
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/:$0/:$1/options', [enums_1.Field.table, enums_1.Field.id]),
        middlewares: middlewares_1.middlewaresID,
        controller: controllers_1.findByPkOptions
    }
];
//# sourceMappingURL=findByPk.js.map