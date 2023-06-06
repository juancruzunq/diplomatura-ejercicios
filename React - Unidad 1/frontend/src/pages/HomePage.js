import React from "react";

const HomePage = (props) => {
    return (
        <main className="main">
            <div className="image-container">
                <section className="bienvenidos-container">
                    <h2  className="titulos-home">Bienvenidos</h2>
                    <p  className="parrafo-home">En esta pagina hacemos los sueños de muchas mascotas realidad , encontrar una familia ♥<br/>
                    Dentro de la seccion "Adoptar un animal" podes empezar a cambiar la vida de una mascota que se
                    encuentra sin hogar .<br/> 
                    Te ayudamos durante todo el proceso , desde que viste la mascota que queres en tu familia , hasta que se logra la adopcion tan esperada 
                    ,todo para que la experiencia sea saludable y satisfactoria. <br/>
                    </p>
                    <h2 className="titulos-home">Adoptar nunca fue tan facil</h2>
                </section>
            </div>
        </main>
    );
}

export default HomePage;