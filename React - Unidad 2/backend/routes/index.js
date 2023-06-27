var express = require('express');
var app = express.Router();

/* GET home page. */

app.get('/', function (req, res, next) {
  res.json("Index");
});

app.get('/adopciones', function (req, res, next) {
  res.sendStatus(500);
});

app.get('/users', function (req, res, next) {
  res.send("Get all users");
});

//Depende el tipo de animal retorna los nombres de los animales en adopcion
app.get('/animales', function (req, res, next) {
  const tipoAnimal = req.query.animal
  if (tipoAnimal === 'Gato') {
    res.json(200, [{ 'Nombre': 'Zyra', 'Edad': '2 años', 'Tipo': 'gato' }, { 'Nombre': 'Kiza', 'Edad': '1 años', 'Tipo': 'gato' }]);
  }
  else if (tipoAnimal === 'Perro'){
    res.json(200, { 'Nombre': 'Milo', 'Edad': '10 años', 'tipo': 'perro' });
  }
  else {
    res.json(404,'No se encontro ese tipo de animal');
  }
});
module.exports = app;
