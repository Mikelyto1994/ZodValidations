"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Importa Express
const productRoutes_1 = __importDefault(require("./routes/productRoutes")); // Importa las rutas de productos
const app = (0, express_1.default)(); // Crea una instancia de la aplicación Express
app.use(express_1.default.json()); // Middleware para parsear el JSON en el cuerpo de las peticiones
app.use('/api/products', productRoutes_1.default); // Define la ruta base para las rutas de productos
const PORT = process.env.PORT || 3000; // Define el puerto, si no hay uno en las variables de entorno, usa 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Mensaje de confirmación en la consola
});
