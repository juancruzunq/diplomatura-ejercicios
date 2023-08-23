var express = require('express');
var app = express.Router();
const MascotaController = require('../controllers/MascotaController.js')
const UsuarioController = require('../controllers/UsuarioController.js')


/* Routes Mascota */
app.post('/mascota',new MascotaController().create);        //Publicar Mascota


/* Routes Usuarios*/
app.post('/registrar',new UsuarioController().create);       //Publicar Usuario



module.exports = app;

