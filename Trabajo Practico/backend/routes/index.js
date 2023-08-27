var express = require('express');
var app = express.Router();
const MascotaController = require('../controllers/MascotaController.js')
const UsuarioController = require('../controllers/UsuarioController.js')
const SessionController = require('../controllers/SessionController.js')


/* Routes Mascota */
app.post('/publicar',new MascotaController().publicar);        //Publicar Mascota


/* Routes Usuarios*/
app.post('/registrar',new UsuarioController().registrar);      //Publicar Usuario
app.post('/login',new UsuarioController().login);              //Logear Usuario
app.get('/buscar',new UsuarioController().buscar);             //Busca un usuario


/* Routes Session*/
app.post('/logout',new SessionController().logout);         //Destruye la sesion
app.get('/logInCheck',new SessionController().logInCheck);  //Checkea si existe una session abierta


module.exports = app;

