import React, { useState } from 'react';
import Select from 'react-select'
import { FaCat, FaDog } from 'react-icons/fa';
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';
import '../styles/components/pages/publicarAnimal.css';
import provincias from '../utils/provincias.json';

const AnimalUploadPage = () => {
  const [nombre, setNombre] = useState('');
  const [raza, setRaza] = useState('');
  const [edad, setEdad] = useState(0);
  const [castrado, setCastrado] = useState(false);
  const [vacunado, setVacunado] = useState(false);
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [tipo, setTipo] = useState('Gato');
  const [provincia, setProvincia] = useState(provincias[0]); 
  const [loading, setLoading] = useState(false);


  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleRazaChange = (event) => {
    setRaza(event.target.value);
  };
  const handleEdadChange = (event) => {
    setEdad(parseInt(event.target.value, 10));
  };

  const handleTipoChange = (selectedTipo) => {
    setTipo(selectedTipo);
  };

  const handleSelectChange = (option) => {
    setProvincia(option);
  };

  const handleCastradoChange = () => {
    setCastrado(!castrado);
  };

  const handleVacunadoChange = () => {
    setVacunado(!vacunado);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleImagenChange = (event) => {
    setImagen(event.target.files[0]);
  };

  const handleUploadClick = () => {
    document.getElementById('imagen').click();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false); 
    setImagen(null);  
    setNombre('');
    setRaza('');
    setEdad(0);
    setProvincia(provincia[0]);
    setTipo('Gato');   
    setVacunado(false);
    setCastrado(false);
    setDescripcion('');
      
    
  };

  return (
    <div>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      <form className="custom-form" onSubmit={handleSubmit}>
        <div className="redes-title">
          <h2>Publicar Patita</h2>
        </div>
        <div className="image-upload">
          <div className="image-upload-circle" onClick={handleUploadClick}>
            {imagen ? <img src={URL.createObjectURL(imagen)} alt="Animal" /> : <div>Subir Imagen</div>}
          </div>
          <input
            type="file"
            id="imagen"
            accept="image/*"
            onChange={handleImagenChange}
            style={{ display: 'none' }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="raza" className="form-label">
            Raza
          </label>
          <input
            type="text"
            className="form-control"
            id="raza"
            value={raza}
            onChange={handleRazaChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Edad
          </label>
          <input
            type="number"
            className="form-control"
            id="edad"
            value={edad}
            onChange={handleEdadChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Ubicacion
          </label>
          <Select isSearchable={true} options={provincias} value={provincia}  onChange={handleSelectChange} className='custom-select' required  />
        </div>
        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">
            Tipo
          </label>
          <div className="tipo-icons">
            <div className={`tipo-icon ${tipo === 'Gato' ? 'selected' : ''}`} onClick={() => handleTipoChange('Gato')}>
              <FaCat />
              <span>Gato</span>
            </div>
            <div className={`tipo-icon ${tipo === 'Perro' ? 'selected' : ''}`} onClick={() => handleTipoChange('Perro')}>
              <FaDog />
              <span>Perro</span>
            </div>
          </div>
        </div>
        <div className="mb-3 form-check">
          <div
            className={`castrado-icon ${castrado ? 'selected' : ''}`}
            onClick={handleCastradoChange}
          >
            {castrado ? <IoIosCheckmarkCircleOutline size={40} color="green" /> : <IoIosCloseCircleOutline size={40} color="red" />}
            <span>Castrado</span>
          </div>
          <div
            className={`vacunado-icon ${vacunado ? 'selected' : ''}`}
            onClick={handleVacunadoChange}
          >
            {vacunado ? <IoIosCheckmarkCircleOutline size={40} color="green" /> : <IoIosCloseCircleOutline size={40} color="red" />}
            <span>Vacunado</span>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción
          </label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={handleDescripcionChange}
            className="form-control"
            required
            style={{ height: '150px' }}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-violet btn-center">
            {loading ? 'Publicando Patita...' : 'Publicar'}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AnimalUploadPage;