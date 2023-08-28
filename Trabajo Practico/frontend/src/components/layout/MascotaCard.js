import React from 'react';
import '../../styles/components/layout/mascotaCard.css';
import Imagen1 from '../../images/adopciones/kiza.png';
import Imagen2 from '../../images/adopciones/leki.png';
import Imagen3 from '../../images/adopciones/milo-leyla.png';

import { FaMapMarkerAlt, FaHeart, FaWhatsapp } from 'react-icons/fa';

const MascotaCard = ({ mascota }) => {
  const descripcionClassName = mascota.descripcion.length > 100 ? 'descripcion scrollable' : 'descripcion';

  return (
    <div className="card">
      <div className="card-content">
        <div className="img-container">
          <img src={Imagen2} alt={mascota.nombre} />
        </div>
        <div className="adopciones-card-info">
          <h4 className="nombre-mascota">{mascota.nombre}</h4>
          <p className={descripcionClassName}>{mascota.descripcion}</p>
          <div className="icons-container">
            <FaWhatsapp className="icon whatsapp" />
            <FaHeart className="icon" />
          </div>
          <div className="location-container">
            <FaMapMarkerAlt className="location-icon" />
            <p>{mascota.provincia}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MascotaCard;
