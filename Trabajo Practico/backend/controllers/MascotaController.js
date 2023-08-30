const MascotaModel = require('../models/MascotaModel.js');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);
class MascotaController {

  // Method POST :  Crea una mascota . Si no existe la mascota por nombre y id_usuario , la crea , sino arroja error 
  // API : http://localhost:3000/publicar
  async publicar(req, res) {
    try {

      const id_usuario = req.cookies.user_id;
      const mascotaModel = new MascotaModel();
      var mascotas = await mascotaModel.searchMascotaByName(req, res, id_usuario);
      if (mascotas.length === 0) {
        var id_imagen = '';

        if (req.files && Object.keys(req.files).length > 0) {
          var imagen = req.files.imagen;
          id_imagen = (await uploader(imagen.tempFilePath)).public_id
        }
        mascotaModel.create(req, res, id_imagen, id_usuario)
      }
      else {
        return res.status(500).json({ message: 'Ya existe publicada la mascota' });
      }
    }
    catch (error) {
      return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde' });

    }
  }
  // Method POST : Busca mascotas 
  // API : http://localhost:3000/buscar
  async buscar(req, res) {
    try {
      const mascotaModel = new MascotaModel();
      var mascotas = await mascotaModel.searchMascotas();
      mascotas = mascotas.map(mascota => {
        if (mascota.id_imagen) {
          const imagen = cloudinary.image(mascota.id_imagen, {
            width: 500,
            height: 500,
            crop: 'fill'
          });
          return {
            ...mascota,
            imagen
          }
        } else {
          return {
            ...mascota,
            imagen: ''
          }
        }
      }
      );
      return res.status(200).json(mascotas);
    }

    catch (error) {
      return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde' });
    }
  }

  // Method POST : Busca las mascotas publicadas por el usuario logeado 
  // API : http://localhost:3000/publicados
  async buscarPublicados(req, res) {
    try {
      const id_usuario = req.cookies.user_id;
      const mascotaModel = new MascotaModel();
      var mascotas = await mascotaModel.searchPublicados(id_usuario);
      mascotas = mascotas.map(mascota => {
        if (mascota.id_imagen) {
          const imagen = cloudinary.image(mascota.id_imagen, {
            width: 500,
            height: 500,
            crop: 'fill'
          });
          return {
            ...mascota,
            imagen
          }
        } else {
          return {
            ...mascota,
            imagen: ''
          }
        }
      }
      );
      return res.status(200).json(mascotas);
    }

    catch (error) {
      return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde' });
    }
  }

  // Method POST : Elimina la mascota por id_mascota
  // API : http://localhost:3000/eliminar
  async eliminar(req, res) {
    try {    
      const id_mascota = req.params.id_mascota; 
      const mascotaModel = new MascotaModel();
      const mascota = await mascotaModel.searchMascotaById(id_mascota);

      if(mascota[0].id_imagen){
        await (destroy(mascota[0].id_imagen));
      }
      await mascotaModel.eliminar(id_mascota);
      return res.status(200).json({ message: 'Mascota eliminada correctamente' });
    }
    catch (error) {
      return res.status(500).json({ message: 'Hubo un problema con el servidor , intente mas tarde' });
    }
  }
}

module.exports = MascotaController;

