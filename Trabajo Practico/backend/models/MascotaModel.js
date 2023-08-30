const pool = require('./db.js');
const uuid = require('uuid');


class MascotaModel {

  // Query para crear una mascota  
  create(req, res, id_imagen, id_usuario) {
    try {
      const { nombre, edad, contacto, tipo, castrado, vacunado, descripcion, provincia } = req.body;
      const id_mascota = uuid.v4();
      const query = 'INSERT INTO mascotas (id_mascota,nombre,edad,contacto,castrado,vacunado,descripcion,provincia,tipo,id_imagen,id_usuario) VALUES (?,?,?,?,?,?,?,?,?,?,?)';

      pool.query(query, [id_mascota, nombre, edad, contacto, castrado, vacunado, descripcion, provincia, tipo, id_imagen, id_usuario], (error) => {
        if (error) {
          return res.status(500).json({ message: 'Hubo un problema al intentar registrar la mascota, inténtelo de nuevo más tarde' });
        }
        return res.status(200).json({ message: 'Mascota publicada correctamente' });
      });

    }
    catch (error) {
    }
  }

  //Query para buscar una mascota publicada por nombre e id_usuario
  async searchMascotaByName(req, res,id_usuario) {
    const { nombre} = req.body;
    try {
      const query = 'SELECT * FROM mascotas WHERE 1=1 and nombre = ? and id_usuario = ?';
      const result = pool.query(query, [nombre, id_usuario]);
      return result;
    } catch (error) {
    }
  }

  // Query para buscar mascotas
  async searchMascotas() {
    try {
      const query = 'SELECT * FROM mascotas WHERE 1=1';
      const result = pool.query(query);
      return result;
    } catch (error) {
    }
  }

  // Query para buscar mascotas por id_usuario
  async searchPublicados(id_usuario) {
    try {
      const query = 'SELECT * FROM mascotas WHERE 1=1 AND id_usuario = ?';
      const result = pool.query(query,[id_usuario]);
      return result;
    } catch (error) {
    }
  }

  //Query para buscar una mascota por id_mascota
  async searchMascotaById(id_mascota) {
    try {
      const query = 'SELECT * FROM mascotas WHERE 1=1 and id_mascota = ?';
      const result = pool.query(query, [id_mascota]);
      return result;
    } catch (error) {
    }
  }

  // Query para eliminar mascotas por id_usuario
  async eliminar(id_mascota) {
    try {
      const query = 'DELETE FROM mascotas WHERE id_mascota = ?';
      const result = pool.query(query,[id_mascota]);
      return result;
    } catch (error) {
    }
  }

}

module.exports = MascotaModel;
