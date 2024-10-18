import { Router } from 'express'; // Importa el Router de Express
import validateProduct from '../middleware/validateProduct'; // Importa el middleware de validación

const router = Router(); // Crea una instancia del router

// Ruta POST para crear un nuevo producto
router.post('/', validateProduct, (req, res) => {
    const newProduct = req.body; // Obtiene el nuevo producto del cuerpo de la petición
    // Aquí podrías agregar lógica para guardar el producto en la base de datos
    res.status(201).json({ message: 'Producto creado', product: newProduct }); // Responde con el producto creado
});

export default router; // Exporta el router
