import React from "react";
import Whatsapp from '../images/whatsapp.svg'
import Facebook from '../images/facebook.svg'
import Instagram from '../images/instagram.svg'
import "../styles/components/pages/contactoPage.css"

const ContactoNovedades = (props) => {
    return (
        <main className="main">
            <div className="redes-title">
                <h2>Nuestras Redes</h2>
            </div>
                <div className="redes-redes">
                    <div class="redes-element"><img src={Whatsapp} width="20" alt="Icono Facebook" /><a href="https://www.facebook.com/">Facebook</a></div>
                    <div class="redes-element"><img src={Facebook} width="20" alt="Icono Whatsapp" /><a href="https://web.whatsapp.com/">Whatsapp</a></div>
                    <div class="redes-element"><img src={Instagram} width="20" alt="Icono Instagram" /><a href="https://www.instagram.com/">Instagram</a></div>
                </div>
            
        </main>
    );
}

export default ContactoNovedades;