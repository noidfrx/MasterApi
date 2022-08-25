"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.Usuario = exports.Animal = void 0;
const animal_1 = require("./animal");
Object.defineProperty(exports, "Animal", { enumerable: true, get: function () { return animal_1.Animal; } });
const usuario_1 = require("./usuario");
Object.defineProperty(exports, "Usuario", { enumerable: true, get: function () { return usuario_1.Usuario; } });
function initModels(sequelize) {
    const Animal = animal_1.Animal.initModel(sequelize);
    const Usuario = usuario_1.Usuario.initModel(sequelize);
    return {
        Animal: Animal,
        Usuario: Usuario,
    };
}
exports.initModels = initModels;
//# sourceMappingURL=init-models.js.map