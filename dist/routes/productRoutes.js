"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // Importa el Router de Express
const validateProduct_1 = __importDefault(require("../middleware/validateProduct")); // Importa el middleware de validación
const router = (0, express_1.Router)(); // Crea una instancia del router
// Ruta POST para crear un nuevo producto
router.post('/', validateProduct_1.default, (req, res) => {
    const newProduct = req.body; // Obtiene el nuevo producto del cuerpo de la petición
    // Aquí podrías agregar lógica para guardar el producto en la base de datos
    res.status(201).json({ message: 'Producto creado', product: newProduct }); // Responde con el producto creado
});
exports.default = router; // Exporta el router
