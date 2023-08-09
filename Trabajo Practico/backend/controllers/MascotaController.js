const pool = require('../models/db.js'); // Ajusta la ruta según tu estructura de archivos
const uuid = require('uuid');

class MascotaController {
  create(req, res) {   
    const {id_mascota=uuid.v4(), nombre, edad, raza, tipo, castrado, vacunado, descripcion, provincia } = req.body;  
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error al obtener la conexión: ', err);
        return res.status(500).json({ error: 'Error en el servidor' });
      }

      const insertQuery = 'INSERT INTO mascotas (id_mascota,nombre,edad,raza,castrado,vacunado,descripcion,provincia,tipo) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)';

      connection.query(
        insertQuery,
        [id_mascota,nombre, edad, raza, castrado, vacunado, descripcion, provincia, tipo],
        (error, results) => {
          connection.release(); 
          if (error) {     
                
            return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde' });
          }
          res.status(200).json({ message: 'Mascota insertada correctamente' });
        }
      );
    });
  }
}

module.exports = MascotaController;
