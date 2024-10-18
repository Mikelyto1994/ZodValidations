"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productSchema_1 = __importDefault(require("../schema/productSchema")); // Importa el esquema de producto
const zod_1 = require("zod"); // Importa ZodError para manejar errores de validación
const validateProduct = (req, res, next) => {
    try {
        productSchema_1.default.parse(req.body); // Valida el cuerpo de la petición con el esquema
        next(); // Si la validación es exitosa, llama al siguiente middleware o controlador
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) { // Verifica si el error es de tipo ZodError
            res.status(400).json({ errors: err.errors }); // Responde con estado 400 y los errores de validación
        }
        else {
            res.status(500).json({ message: 'Error interno del servidor' }); // Responde con un error genérico
        }
    }
};
exports.default = validateProduct; // Exporta el middleware
