"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerSP = void 0;
const utils_1 = require("../../utils");
const middlewares_1 = require("../../middlewares");
const controllers_1 = require("../../controllers");
const enums_1 = require("../../enums");
exports.routerSP = [
    {
        method: 'get',
        path: (0, utils_1.printString)('/sp/func/:$0', [enums_1.Field.name]),
        middlewares: middlewares_1.middlewaresMin,
        controller: controllers_1.funcSimple
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/sp/func/:$0/options', [enums_1.Field.name]),
        middlewares: middlewares_1.middlewaresMin,
        controller: controllers_1.funcOptions
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/sp/call/:$0', [enums_1.Field.name]),
        middlewares: middlewares_1.middlewaresMin,
        controller: controllers_1.callSimple
    }, {
        method: 'get',
        path: (0, utils_1.printString)('/sp/call/:$0/options', [enums_1.Field.name]),
        middlewares: middlewares_1.middlewaresMin,
        controller: controllers_1.callOptions
    }
];
//# sourceMappingURL=storedProcedure.js.map