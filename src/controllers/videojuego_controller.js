import videojuegoModel from "../models/videojuego.js";
import { v4 as uuidv4 } from 'uuid';

const getAllVideojuegosControllers = async (req, res) => {
    const videojuegos = await videojuegoModel.getAllVideojuegosModel();
    res.status(200).json(videojuegos);
};

const createVideojuegoControllers = async (req, res) => {
    const newVideojuegoData = {
        id: uuidv4(),
        ...req.body
    };
    try {
        const videojuego = await videojuegoModel.createVideojuegoModel(newVideojuegoData);
        res.status(201).json(videojuego);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateVideojuegoControllers = async (req, res) => {
    const { id } = req.params;
    try {
        const videojuego = await videojuegoModel.updateVideojuegoModel(id, req.body);
        res.status(200).json(videojuego);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteVideojuegoControllers = async (req, res) => {
    const { id } = req.params;
    try {
        const videojuego = await videojuegoModel.deleteVideojuegoModel(id);
        res.status(200).json({ msg: "Videojuego eliminado exitosamente.", videojuego });
    } catch (error) {
        res.status(500).json({ msg: "Error al intentar eliminar el videojuego.", error });
    }
};

const readVideojuegoControllers = async (req, res) => {
    const { id } = req.params;
    try {
        const videojuego = await videojuegoModel.readVideojuegoModel(id);
        res.status(200).json(videojuego);
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    getAllVideojuegosControllers,
    createVideojuegoControllers,
    updateVideojuegoControllers,
    deleteVideojuegoControllers,
    readVideojuegoControllers
};
