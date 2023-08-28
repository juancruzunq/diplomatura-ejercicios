import React, { useEffect, useState } from 'react';
import '../styles/components/pages/adoptarAnimalPage.css';
import axios from 'axios';
import MascotaCard from '../components/layout/MascotaCard';


const AdoptarPage = (props) => {

    const [mascotas, setMascotas] = useState([]);

    //Busca las mascotas para adoptar
    const fetchMascotas = async () => {
        const apiUrl = process.env.REACT_APP_API_URL + '/mascotas';
        try {
            const response = await axios.get(apiUrl, { withCredentials: true });
            setMascotas(response.data);
        } catch (error) {
            setMascotas([]);
        }
    };

    useEffect(() => {
        fetchMascotas();
    }, []);

    return (
        <div>
            <div className="title-container">
                <h2>Buscamos una familia</h2>
            </div>
            <div className="adopciones-cards">
                {mascotas.map((mascota) => (
                    <MascotaCard key={mascota.id_mascota} mascota={mascota} />

                ))}
            </div>
        </div>
    );
}

export default AdoptarPage;
