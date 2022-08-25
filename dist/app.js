"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const environment_1 = require("./environment");
const sequelize_1 = __importDefault(require("./config/sequelize"));
const init_models_1 = require("./models/init-models");
console.clear();
console.info("[[-START TEST-]]");
sequelize_1.default.authenticate().then(() => {
    console.info("[Database online]");
    (0, init_models_1.initModels)(sequelize_1.default);
    new server_1.default(environment_1.port).start();
}).catch((err) => {
    console.error("[Error connection Database]: ", err.message);
    console.assert();
}).finally(() => {
    console.info("[[-END TEST-]]");
});
//# sourceMappingURL=app.js.map