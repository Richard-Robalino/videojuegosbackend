import express from 'express';
import { getAllVideojuegosControllers, createVideojuegoControllers, updateVideojuegoControllers, deleteVideojuegoControllers, readVideojuegoControllers } from '../controllers/videojuego_controller.js';

const router = express.Router();

router.get('/videojuegos', getAllVideojuegosControllers); // Ruta para obtener todos los videojuegos
router.post('/videojuegos', createVideojuegoControllers); // Ruta para crear un nuevo videojuego
router.put('/videojuegos/:id', updateVideojuegoControllers); // Ruta para actualizar un videojuego
router.delete('/videojuegos/:id', deleteVideojuegoControllers); // Ruta para eliminar un videojuego
router.get('/videojuegos/:id', readVideojuegoControllers); // Ruta para obtener un videojuego por ID

export default router;
