import React from "react";
import navbar from "./css/navBar.module.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className={`topnav ${navbar.navbar}`} id="myTopnav">
        <a href="#carousel" className={navbar.navbar_a}>
          Inicio
        </a>
        <a href="#catalog" className={navbar.navbar_a}>
          Catalogo
        </a>
        <a href="/" className={navbar.navbar_a}>
          Preguntas frecuentes
        </a>
        <a href="/" className={`${navbar.navbar_a} ${navbar.ultimo}`}>
          Contacto
        </a>
      </div>
    );
  }
}

export default Navbar;

