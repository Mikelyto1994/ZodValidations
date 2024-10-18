import { Request, Response, NextFunction } from 'express'; // Importa tipos de Express
import productSchema from '../schema/productSchema'; // Importa el esquema de producto
import { ZodError } from 'zod'; // Importa ZodError para manejar errores de validación

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
        productSchema.parse(req.body); // Valida el cuerpo de la petición con el esquema
        next(); // Si la validación es exitosa, llama al siguiente middleware o controlador
    } catch (err) {
        if (err instanceof ZodError) { // Verifica si el error es de tipo ZodError
            res.status(400).json({ errors: err.errors }); // Responde con estado 400 y los errores de validación
        } else {
            res.status(500).json({ message: 'Error interno del servidor' }); // Responde con un error genérico
        }
    }
};

export default validateProduct; // Exporta el middleware
