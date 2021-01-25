import React from "react";
import hInicio from "./css/headerInicio.module.css";
import SearchBarComponent from "../container/searchBarComponent.jsx";
import SideBar from "../container/sideBarComponent.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderInicio() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div>
      <div className={hInicio.header}>
        <div className={hInicio.marca}>
        <button className={hInicio.brandButton} onClick={openMenu}>
          &#9776;
        </button>
            <img className={hInicio.logo} src={`/imagenes/cheryl.png`} alt='' />
        </div>
          <div className={hInicio.brand}>
          <a href="/">CHERYL</a>
        </div>
        <Link
          to={{
            pathname: "/users/cart",
          }}
        >
          </Link>
        <div className={hInicio.searchbar}></div>
        <div className={hInicio.searchbar}>
          <SearchBarComponent />
        </div>
      </div>
      <aside style={{ zIndex: 1 }} className="sidebar">
        <SideBar onclose={closeMenu} />
      </aside>
    </div>
  );
}

export default HeaderInicio;
