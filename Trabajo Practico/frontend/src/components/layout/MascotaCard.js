import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/layout/mascotaCard.css';
import Imagen1 from '../../images/adopciones/kiza.png';

import { FaMapMarkerAlt, FaInfoCircle, FaWhatsapp } from 'react-icons/fa';

const MascotaCard = ({ mascota }) => {
  const descripcionClassName =mascota.descripcion.length > 100 ? 'descripcion scrollable' : 'descripcion';
  const atencionMedica = () => {
    if(mascota.vacunado && mascota.castrado)
    return "Vacunado & Castrado";
    if(mascota.vacunado || mascota.castrado)
    return mascota.vacunado ? "Vacunado" : "Castrado";
  else return "Sin atencion medica"
  };

  return (
    <div className="card">
      <div className="card-content">
        <div className="img-container">
          <img src={Imagen1} alt={mascota.nombre} />
        </div>
        <div className="adopciones-card-info">
          <h4 className="nombre-mascota">{mascota.nombre}</h4>
          <div className="additional-info">
              <FaInfoCircle className="additional-info-icon" />
              <p className="additional-info-text">{mascota.tipo === 0 ? 'Hembra, ' : 'Macho, '}{mascota.edad === 0 ? 'Cachorro' : 'Adulto '}</p>       
          </div>
          <div className="additional-info">
              <FaInfoCircle className="additional-info-icon" />
              <p className="additional-info-text">{atencionMedica()}</p>       
          </div>            
          <p className={descripcionClassName}>{mascota.descripcion}</p>
          <div className="location-container">
            <FaMapMarkerAlt className="location-icon" />
            <p>{mascota.provincia}</p>            
          </div>
        </div>
      </div>
      <div className="icons-container">
        <FaWhatsapp className="icon whatsapp" />
      </div>
    </div>
  );
};

MascotaCard.propTypes = {
  mascota: PropTypes.object.isRequired,
};

export default MascotaCard;
