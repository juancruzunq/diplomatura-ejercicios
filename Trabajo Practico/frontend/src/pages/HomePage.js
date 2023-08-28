
import React, { useState, useEffect } from 'react';
import '../styles/components/pages/homePage.css';
import Imagen from '../images/pet.jpg';
import axios from 'axios';

const HomePage = () => {
    const [nombre, setNombre] = useState('');
    //Busca el usuario logeado
    const fetchUsuario = async () => {
        const apiUrl = process.env.REACT_APP_API_URL + '/usuario';
        try {
            const response = await axios.get(apiUrl, { withCredentials: true });
            if (response.status === 200) {
                setNombre(response.data.usuario);
            }
        } catch (error) {
            setNombre('Invitado');
        }
    }

    useEffect(() => {
        fetchUsuario();
    }, []);

    return (
        <main className="main">
            <div >
                <section >
                    <h2 className="titulos-home">Bienvenido/a {nombre} !</h2>
                    <p className="parrafo-home">En esta pagina hacemos los sueños de muchas mascotas realidad , encontrar una familia ♥<br />
                        PatitasSinHogar es un proyecto destinado a la adopcion de mascotas.<br /> Desde nuestro sitio web vas a poder buscar , elegir ,
                        y completar la adopcion en unos simples pasos <br />
                    </p>
                    <h2 className="titulos-home">Adoptar nunca fue tan facil</h2>
                </section>
                <div className="imagen" >
                    <img src={Imagen} alt="Logo de pets" width="900" />
                </div>
            </div>
        </main>
    );
}

export default HomePage;