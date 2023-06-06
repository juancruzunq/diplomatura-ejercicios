import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/adoptar">Adoptar Patita</Link></li>
                    <li><Link to="/publicar">Publicar Patita</Link></li>
                    <li><Link to="/contacto">Contacto y novedades</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;