const pool = require('./db.js');
const uuid = require('uuid');


class MascotaModel {

  //Method para crear una mascota  
  create(req, res, id_imagen, id_usuario) {
    try {
      const { nombre, edad, raza, tipo, castrado, vacunado, descripcion, provincia } = req.body;
      const id_mascota = uuid.v4();
      const query = 'INSERT INTO mascotas (id_mascota,nombre,edad,raza,castrado,vacunado,descripcion,provincia,tipo,id_imagen,id_usuario) VALUES (?,?,?,?,?,?,?,?,?,?,?)';

      pool.query(query, [id_mascota, nombre, edad, raza, castrado, vacunado, descripcion, provincia, tipo, id_imagen, id_usuario], (error) => {
        if (error) {
          return res.status(500).json({ message: 'Hubo un problema al intentar registrar la mascota, inténtelo de nuevo más tarde' });
        }
        return res.status(200).json({ message: 'Mascota publicada correctamente' });
      });

    }
    catch (error) {
      return res.status(500).json({ message: 'Hubo un problema al intentar registrar la mascota , intente mas tarde' });
    }
  }

  //Method para buscar una mascota publicada por nombre e id_usuario
  async searchMascotaByName(req, res) {
    const { nombre, id_usuario } = req.body;
    try {
      const query = 'SELECT * FROM mascotas WHERE 1=1 and nombre = ? and id_usuario = ?';
      const result = pool.query(query, [nombre, id_usuario]);
      return result;
    } catch (error) {
      return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde' });
    }
  }
}

module.exports = MascotaModel;
