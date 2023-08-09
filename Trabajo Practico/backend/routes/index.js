var express = require('express');
var app = express.Router();
const MascotaController = require('../controllers/MascotaController.js')


/* GET home page. */
app.post('/',new MascotaController().create);




module.exports = app;

