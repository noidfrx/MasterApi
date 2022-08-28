"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducativeContentList = void 0;
const sequelize_1 = require("sequelize");
class EducativeContentList extends sequelize_1.Model {
    static initModel(sequelize) {
        return EducativeContentList.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            image: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            sound: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            categoryId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'categories',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'educativeContentList',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "educativeContentList_pkey",
                    unique: true,
                    fields: [
                        { name: "id" },
                    ]
                },
            ]
        });
    }
}
exports.EducativeContentList = EducativeContentList;
//# sourceMappingURL=educativeContentList.js.map