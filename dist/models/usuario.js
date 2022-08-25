"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
class Usuario extends sequelize_1.Model {
    static initModel(sequelize) {
        return Usuario.init({
            idUser: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nameUser: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            ageUser: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'usuario',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "usuario_pkey",
                    unique: true,
                    fields: [
                        { name: "idUser" },
                    ]
                },
            ]
        });
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map