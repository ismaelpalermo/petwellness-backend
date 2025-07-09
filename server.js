const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const mascotaRoutes = require('./routes/mascotaRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/mascotas', mascotaRoutes);

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('🟢 Conectado a MongoDB Atlas');
        app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
    })
    .catch(err => console.error('🔴 Error de conexión:', err));
