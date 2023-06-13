var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.json("Index");
});

router.get('/adopciones', function(req, res, next) {
  res.sendStatus(500);
});

router.get('/users', function(req, res, next) {
  res.send("Get all users");
});

router.get('/animales', function(req, res, next) {
  res.json(200 ,{'Nombre':'Zyra' , 'Edad' : '2 años' , 'tipo' : 'gato'});
});

module.exports = router;
