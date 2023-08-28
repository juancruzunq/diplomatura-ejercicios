import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/layout/mascotaCard.css';
import Imagen1 from '../../images/adopciones/kiza.png';

import { FaMapMarkerAlt, FaHeart, FaWhatsapp } from 'react-icons/fa';

const MascotaCard = ({ mascota }) => {
  const descripcionClassName =
    mascota.descripcion.length > 100 ? 'descripcion scrollable' : 'descripcion';

  return (
    <div className="card">
      <div className="card-content">
        <div className="img-container">
          <img src={Imagen1} alt={mascota.nombre} />
        </div>
        <div className="adopciones-card-info">
          <h4 className="nombre-mascota">{mascota.nombre}</h4>
          <p className={descripcionClassName}>{mascota.descripcion}</p>
          <div className="location-container">
            <FaMapMarkerAlt className="location-icon" />
            <p>{mascota.provincia}</p>
          </div>
        </div>
      </div>
      <div className="icons-container">
        <FaWhatsapp className="icon whatsapp" />
        <FaHeart className="icon" />
      </div>
    </div>
  );
};

MascotaCard.propTypes = {
  mascota: PropTypes.object.isRequired,
};

export default MascotaCard;
