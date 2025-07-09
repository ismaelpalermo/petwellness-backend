const express = require('express');
const router = express.Router();
const { crearMascota, obtenerMascotas, agregarConsulta, buscarMascotas } = require('../controllers/mascotaController');

// Ruta para crear una mascota
router.post('/', crearMascota);

// Ruta para obtener todas las mascotas
router.get('/', obtenerMascotas);

// Ruta para agregar una consulta a una mascota
router.post('/:id/consulta', agregarConsulta);

// Ruta para buscar mascotas por nombre o especie
router.get('/buscar', buscarMascotas);

module.exports = router;
