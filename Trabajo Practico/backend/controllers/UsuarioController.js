const UsuarioModel = require('../models/UsuarioModel.js');


class UsuarioController {

  // Method POST : Crea un usuario . Si no existe el usuario por mail y password , lo crea, sino arroja error 
  // API : http://localhost:3000/registrar
  async create(req, res) {
    try {    
      
      const usuarioModel = new UsuarioModel();
      var usuarios = await usuarioModel.searchUsuarioByMailAndPassword(req, res);
      if (usuarios.length === 0) {
        usuarioModel.create(req, res)
      }
      else {
        return res.status(500).json({ message: 'El correo electronico ya se encuentra en uso'});
      }
    }
    catch (error) {
      return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde'});

    }
  }


}

module.exports = UsuarioController;

