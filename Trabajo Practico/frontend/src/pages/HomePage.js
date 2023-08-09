
import React, { useState, useEffect } from 'react';
import '../styles/components/pages/homePage.css';
import Imagen from '../images/pet.jpg'
const HomePage = (props) => {
    const nombres = ['Juan Cruz' , 'Flavia','Alejandra' , 'Invitado']
    const[nombre,setNombre] = useState(nombres[Math.floor(Math.random() * nombres.length)]);
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