"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const options = JSON.parse(fs_1.default.readFileSync('./config/configPostgres.json', 'utf-8'));
const sequelize = new sequelize_1.Sequelize(options);
exports.default = sequelize;
//# sourceMappingURL=sequelize.js.map