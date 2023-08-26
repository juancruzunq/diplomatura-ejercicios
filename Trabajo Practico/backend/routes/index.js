var express = require('express');
var app = express.Router();
const MascotaController = require('../controllers/MascotaController.js')
const UsuarioController = require('../controllers/UsuarioController.js')


/* Routes Mascota */
app.post('/mascota',new MascotaController().create);        //Publicar Mascota


/* Routes Usuarios*/
app.post('/registrar',new UsuarioController().create);      //Publicar Usuario
app.post('/login',new UsuarioController().search);          //Logear Usuario


//Deslogear el usuario
app.post('/logout', (req, res) => {
    console.log(req.session);
    console.log(req.cookies);
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Error al cerrar sesión' });
        }       
        res.clearCookie('user_id'); 
        return res.status(200).json({ message: 'Sesión cerrada exitosamente' });
    });
});

module.exports = app;

