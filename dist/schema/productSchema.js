"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod"); // Importa Zod
const productSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: 'El título es obligatorio' }),
    price: zod_1.z.number().positive({ message: 'El precio debe ser mayor que 0' }),
    description: zod_1.z.string().max(200, { message: 'La descripción no puede exceder 200 caracteres' }),
    category: zod_1.z.enum(['electronics', 'clothing', 'furniture'], {
        invalid_type_error: 'Categoría inválida' // Mensaje para tipos inválidos
    }),
    image: zod_1.z.string().url({ message: 'La imagen debe ser una URL válida' }).optional(), // Campo opcional
});
exports.default = productSchema; // Exporta el esquema
