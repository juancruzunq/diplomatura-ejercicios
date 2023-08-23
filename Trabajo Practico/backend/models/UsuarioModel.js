const pool = require('./db.js');
const md5 = require('md5');
const uuid = require('uuid');


class UsuarioModel {


  //Method para crear un usuario
  create(req, res) {
    try {
      const { id_usuario = uuid.v4(), usuario,password,email} = req.body;

      const query = 'INSERT INTO usuarios (id_usuario,usuario,password,email) VALUES (?,?,?,?)';

      pool.query(query, [id_usuario, usuario,md5(password), email], (error) => {
        if (error) {
          return res.status(500).json({ message: 'Hubo un problema al intentar registrar el usuario, inténtelo de nuevo más tarde' });
        }
        return res.status(200).json({ message: 'Usuario publicado correctamente'});
      });

    }
    catch (error) {
      return res.status(500).json({ message: 'Hubo un problema al intentar registrar el usuario, inténtelo de nuevo más tarde' });
    }
  }


  //Method para buscar un usuario por mail y password
  async searchUsuarioByMailAndPassword(req, res) {
    const { email, password } = req.body;
    try {
      const query = 'SELECT * FROM usuarios WHERE 1=1 and email = ? and password = ?';
      const result = pool.query(query, [email, md5(password)]);
      return result;
    } catch (error) {
      return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde' });
    }
  }



}

module.exports = UsuarioModel;
