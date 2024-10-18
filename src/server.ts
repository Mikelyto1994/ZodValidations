import express from 'express'; // Importa Express
import productRoutes from './routes/productRoutes'; // Importa las rutas de productos

const app = express(); // Crea una instancia de la aplicación Express
app.use(express.json()); // Middleware para parsear el JSON en el cuerpo de las peticiones

app.use('/api/products', productRoutes); // Define la ruta base para las rutas de productos

const PORT = process.env.PORT || 3000; // Define el puerto, si no hay uno en las variables de entorno, usa 3000
app.listen(PORT, () => { // Inicia el servidor
    console.log(`Server is running on port ${PORT}`); // Mensaje de confirmación en la consola
});
