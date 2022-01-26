
import React from "react";
import logoImage from "./Images/logo192.png"

function Navbar(){
    return (
            <nav className="nav">
                <img className="nav-logo" src={logoImage}  alt="React Logo"/> 
                <h3>ReactFacts</h3>
                <h4>React Project</h4>

            </nav>
        )
};

export default Navbar;