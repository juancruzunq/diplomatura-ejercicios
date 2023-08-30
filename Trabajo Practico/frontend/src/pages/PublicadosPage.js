import React, { useEffect, useState } from 'react';
import '../styles/components/pages/adoptarAnimalPage.css';
import axios from 'axios';
import MascotaCard from '../components/layout/MascotaCard';


const PublicadosPage = () => {

    const [mascotas, setMascotas] = useState([]);
    const [loading, setLoading] = useState(true);

    /* Busca las mascotas que publique */
    const fetchMascotas = async () => {
        const apiUrl = process.env.REACT_APP_API_URL + '/publicados';
        try {
            const response = await axios.get(apiUrl, { withCredentials: true });
            setMascotas(response.data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (error) {
            setMascotas([]);
        }
    };

    /* Elimina la mascota seleccionada  */
    const deleteMascota = async (id_mascota) => {
        const apiUrl = process.env.REACT_APP_API_URL + '/eliminar/' + id_mascota;
        try {
            const formData = new FormData();
            formData.append('id_mascota', id_mascota);
            const response = await axios.delete(apiUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });
            fetchMascotas();
        } catch (error) {
            setMascotas([]);
        }
    };

    useEffect(() => {
        fetchMascotas();
    }, []);

    return (
        <div>
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                </div>
            )}
            <div className="title-container">
                <h2>Mis publicados</h2>
            </div>
            {mascotas.length === 0 ? (
                <p className="empty-message">
                    Por el momento, no hay animales en adopción. Intente más tarde.
                </p>
            ) : (
                <div className="adopciones-cards">
                    {mascotas.map((mascota) => (
                        <MascotaCard
                            key={mascota.id_mascota}
                            mascota={mascota}
                            flag={true}
                            onDelete={() => deleteMascota(mascota.id_mascota)}
                        />))}
                </div>
            )}
        </div>
    );
};

export default PublicadosPage;
