import React from "react";
import logo from "../../images/logo.png";
const Header = (props) => {
    return (
        <header>
            <div className="holder">
            <img src={logo} width="100" alt="Transportes X"/>
                <h1>PatitasSinHogar </h1>
            </div>
        </header>
    );
}

export default Header;