import { z } from 'zod'; // Importa Zod

const productSchema = z.object({
    title: z.string().min(1, { message: 'El título es obligatorio' }),
    price: z.number().positive({ message: 'El precio debe ser mayor que 0' }),
    description: z.string().max(200, { message: 'La descripción no puede exceder 200 caracteres' }),
    category: z.enum(['electronics', 'clothing', 'furniture'], { 
        invalid_type_error: 'Categoría inválida' // Mensaje para tipos inválidos
    }),
    image: z.string().url({ message: 'La imagen debe ser una URL válida' }).optional(), // Campo opcional
});

export default productSchema; // Exporta el esquema
