const Mascota = require('../models/Mascota');

// Crear nueva mascota
const crearMascota = async (req, res) => {
    try {
        const nuevaMascota = new Mascota(req.body);
        await nuevaMascota.save();
        res.status(201).json(nuevaMascota);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todas las mascotas
const obtenerMascotas = async (req, res) => {
    try {
        const mascotas = await Mascota.find();
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Agregar consulta a una mascota existente
const agregarConsulta = async (req, res) => {
    const { id } = req.params;
    const { fecha, sintoma, diagnostico } = req.body;

    try {
        const mascota = await Mascota.findById(id);
        if (!mascota) return res.status(404).json({ error: 'Mascota no encontrada' });

        mascota.consultas.push({ fecha, sintoma, diagnostico });
        await mascota.save();
        res.json(mascota);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar mascotas por nombre o especie
const buscarMascotas = async (req, res) => {
    const { nombre, especie } = req.query;
    const filtro = {};
    if (nombre) filtro.nombre = new RegExp(nombre, 'i');
    if (especie) filtro.especie = new RegExp(especie, 'i');

    try {
        const mascotas = await Mascota.find(filtro);
        res.json(mascotas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    crearMascota,
    obtenerMascotas,
    agregarConsulta,
    buscarMascotas
};
