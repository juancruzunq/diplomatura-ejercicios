const pool = require('../models/db.js');
const uuid = require('uuid');
const MascotaModel = require('../models/MascotaModel.js');

class MascotaController {

  // Method para crear una mascota . Si no existe la mascota por nombre y id_usuario , la crea , sino arroja error 
  // API : http://localhost:3000/mascota
  async create(req, res) {
    const mascotaModel = new MascotaModel();
    var mascotas = await mascotaModel.searchMascotaByName(req, res);

    if(mascotas.length === 0 ){
      mascotaModel.create(req,res)
    }
    else{
      return res.status(500).json({ message: 'Ya existe publicada la mascota' });
    }

  }
}

module.exports = MascotaController;

