import React from "react";
import Imagen1 from '../images/adopciones/kiza.png'
import Imagen2 from '../images/adopciones/leki.png'
import Imagen3 from '../images/adopciones/milo-leyla.png'
import '../styles/components/pages/adoptarAnimalPage.css';
const AdoptarPage = (props) => {   
    return (
            <div>
            <div className="title-container">
                <h2>Buscamos una familia </h2>
            </div>
            <div className="adopciones-cards">
                <div className="card">
                    <img src={Imagen1} alt="Adopta no compres" width="300" />
                    <div className="adopciones-card-info">
                        <h4>Leki</h4>
                        <p>Gata hembra,aprox 2 meses en adopción responsable, tanto ella como sus otros hermanitos victimas de
                            una sociedad que no castra animales nacidos en la calle buscando refugio en una fabrica donde una
                            persona comenzo a alimentar a su mama y otros gatos pero sin techo,hoy buscan una casita donde les
                            puedan brindar amor y buenos cuidados
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={Imagen2} alt="Adopta no compres" width="300" />
                    <div className="adopciones-card-info">
                        <h4>Kiza</h4>
                        <p>Les presentamos a la nueva integrante de patitas, ella es KIZA.
                            Tiene 2 meses, la estamos desparasitando y despulgando. Una vez desparasitada empezará con sus vacunas.
                            Es una gatita muy mimosa, al principio un poco miedosa pero cuando se adapta es re juguetona y compañera!
                            Estamos buscando una familia para siempre donde puedan darle amor, cariño y todos los cuidados que se merece. Recuerden es una responsabilidad y hay cosas que no pueden faltar a la hora de adoptar:
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img src={Imagen3} alt="Adopta no compres" width="300" />
                    <div className="adopciones-card-info">
                        <h4>Milo & Leyla</h4>
                        <p>Ellos son Matu (macho, adoptado) y Mawi (hembra, adoptada ) dos hermanitos que rescatamos de la casa de Mariela. Llegaron con mucho miedo, desconfianza y bajos de peso.
                            Estuvieron con medicación inyectable cada 48hrs para la tos, y como los valores del hemograma mostraban signos de una hemoparasitosis, hicieron un tratamiento con Doxicilina. Mawi tiene un soplo y hay que controlarlo cada 6 meses, pero no necesita medicación y hace vida normal.
                            Hoy gracias a  <b>PatitasSinHogar</b>  pueden disfrutar de un hogar!
                        </p>
                    </div>
                </div>
                
            </div>
            </div>
    );
}

export default AdoptarPage;