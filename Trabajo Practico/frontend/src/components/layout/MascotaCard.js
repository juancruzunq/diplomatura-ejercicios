import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/layout/mascotaCard.css';
import Imagen1 from '../../images/adopciones/kiza.png';
import { GiHealthNormal } from "react-icons/gi";

import { FaMapMarkerAlt, FaInfoCircle, FaWhatsapp } from 'react-icons/fa';

const MascotaCard = ({ mascota }) => {
  // Extrae la URL de la etiqueta img
  const imageUrlRegex = /src=['"](.*?)['"]/;
  const imageUrlMatch = mascota.imagen.match(imageUrlRegex);
  const imageUrl = imageUrlMatch ? imageUrlMatch[1] : ''; const atencionMedica = () => {
    if (mascota.vacunado && mascota.castrado)
      return "Vacunado & Castrado";
    if (mascota.vacunado || mascota.castrado)
      return mascota.vacunado ? "Vacunado" : "Castrado";
    else return "Sin atencion medica"
  };
  const handleWhatsappClick = () => {
    const phoneNumber = mascota.contacto;
    const greetingEmoji = '👋';
    const petEmoji = mascota.tipo === 0 ? '🐱' : '🐶';
    const message = ` Hola ${greetingEmoji} Vi tu publicacion en PatitasSinHogar y estoy interesado en adoptar a ${mascota.nombre} ${petEmoji}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };
  return (
    <div className="card">
      <div className="card-content">
        <div className="img-container">
          <img src={imageUrl} alt={mascota.nombre} />
        </div>
        <div className="adopciones-card-info">
          <h4 className="nombre-mascota">{mascota.nombre}</h4>
          <div className="additional-info">
            <FaInfoCircle className="additional-info-icon" />
            <p className="additional-info-text">{mascota.tipo === 0 ? 'Hembra, ' : 'Macho, '}{mascota.edad === 0 ? 'Cachorro' : 'Adulto '}</p>
          </div>
          <div className="additional-info">
            <GiHealthNormal className="additional-info-icon" />
            <p className="additional-info-text">{atencionMedica()}</p>
          </div>
          <div className="location-container">
            <FaMapMarkerAlt className="location-icon" />
            <p>{mascota.provincia}</p>
          </div>
          <p >{mascota.descripcion}</p>

        </div>
      </div>
      <div className="icons-container">
        <FaWhatsapp className="icon whatsapp" onClick={handleWhatsappClick} />
      </div>
    </div>
  );
};

MascotaCard.propTypes = {
  mascota: PropTypes.object.isRequired,
};

export default MascotaCard;
