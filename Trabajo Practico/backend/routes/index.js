var express = require('express');
var app = express.Router();
const MascotaController = require('../controllers/MascotaController.js')


/* Publicar Mascota */
app.post('/mascota',new MascotaController().create);




module.exports = app;

