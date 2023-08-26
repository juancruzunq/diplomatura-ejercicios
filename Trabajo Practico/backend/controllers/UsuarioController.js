const UsuarioModel = require('../models/UsuarioModel.js');
const utils = require('../utils/utils.js');


class UsuarioController {

  // Method POST : Crea un usuario . Si no existe el usuario por mail y password , lo crea, sino arroja error 
  // API : http://localhost:3000/registrar
  async create(req, res) {
    try {
      console.log(req.body);
      const usuarioModel = new UsuarioModel();
      var usuarios = await usuarioModel.searchUsuarioByMailAndPassword(req, res);
      if (usuarios.length === 0) {
        const response = await usuarioModel.create(req, res);
        utils.setUserCookies(req,res, response.id_usuario, response.usuario, response.email)      //Asigna cookies : id , usuario , email
        return res.status(200).json({ message: 'Usuario publicado correctamente' });
      }
      else {
        return res.status(500).json({ message: 'El correo electronico ya se encuentra en uso' });
      }
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde' });

    }
  }

  // Method POST :Busca un usuario por el email y password , si no lo encuentra arroja error
  // API : http://localhost:3000/login
  async search(req, res) {
    try {
      const usuarioModel = new UsuarioModel();
      var usuarios = await usuarioModel.searchUsuarioByMailAndPassword(req, res);
      if (usuarios.length === 0) {
        return res.status(500).json({ message: 'El correo electronico o la contraseña son incorrectas' });
      }
      else {
        return res.status(200).json({ message: 'Usuario encontrado'});
      }
    }
    catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde' });

    }
  }


}

module.exports = UsuarioController;

