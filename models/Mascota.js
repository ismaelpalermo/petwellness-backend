const mongoose = require('mongoose');

const ConsultaSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    sintoma: { type: String, required: true },
    diagnostico: { type: String, required: true }
});

const MascotaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    raza: { type: String },
    edad: { type: Number },
    duenio: { type: String, required: true },
    consultas: [ConsultaSchema]
});

module.exports = mongoose.model('Mascota', MascotaSchema);
