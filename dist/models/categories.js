"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const sequelize_1 = require("sequelize");
class Categories extends sequelize_1.Model {
    static initModel(sequelize) {
        return Categories.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            categoryName: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'categories',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "categories_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    }
}
exports.Categories = Categories;
//# sourceMappingURL=categories.js.map