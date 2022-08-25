"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const sequelize_1 = require("sequelize");
class Animal extends sequelize_1.Model {
    static initModel(sequelize) {
        return Animal.init({
            idAnimal: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nameAnimal: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'animal',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "animal_pkey",
                    unique: true,
                    fields: [
                        { name: "idAnimal" },
                    ]
                },
            ]
        });
    }
}
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map