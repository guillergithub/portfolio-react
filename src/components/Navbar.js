import { NavLink } from "react-router-dom";
import { useContext } from "react";

import logo from "../asserts/logo.png";

import translations from "../translations.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLanguage } from "@fortawesome/free-solid-svg-icons";

import LenguageContext from "../context/LenguageContext";
import ThemeContext from "../context/ThemeContext";


const Navbar = ({ showMenu, handleMenu, hiddenMenu, handlePalette }) => {

  const { lenguage, handleLenguage } = useContext(LenguageContext);
  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-fluid nav">
          <div className="d-flex align-items-center">
          {/* ============= LOGO (IMAGE AND TEXT) ============= */}
            <NavLink
              to="/"
              exact
              className="navbar-brand d-flex align-items-center logo-container"
              href="!#"
            >
              <img
                src={logo}
                alt="logo"
                width="40"
                height="35"
                className="d-inline-block align-text-top logo"
              />
              <h2 className="logo-text">Slzr</h2>
            </NavLink>

            {/* ============= NIVIGATION LIST ============= */}
            <ul className="d-flex align-items-center link-pages-container">
              <li>
                <NavLink to="/" exact activeStyle={{color:theme}}>{translations[lenguage].navLinkHome}</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeStyle={{color:theme}}>{translations[lenguage].navLinkAbout}</NavLink>
              </li>
              <li>
                <NavLink to="/projects" activeStyle={{color:theme}}>{translations[lenguage].navLinkProjects}</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeStyle={{color:theme}}>{translations[lenguage].navLinkContact}</NavLink>
              </li>              
            </ul>

            
            {/* ============= LENGUAGE ICON ============= */}
          <div>
            <FontAwesomeIcon className="icon-lenguage" icon={faLanguage} onClick={handleLenguage}/>
          </div>
          </div>


          {/* ============= HAMBURGUER ICON MENU ============= */}
          <div className="ham-container" onClick={handleMenu}>
            <FontAwesomeIcon className="icon-menu" icon={faBars} />
          </div>


          {/* ============= DOTS SHOWS CURRENT PAGE ============= */}
          <div className="dots-container">
            <NavLink to="/" activeStyle={{background: theme}} exact>
              &nbsp;
            </NavLink>
            <NavLink to="/about" activeStyle={{background: theme}} exact>
              &nbsp;
            </NavLink>
            <NavLink to="/projects" activeStyle={{background: theme}} exact>
              &nbsp;
            </NavLink>
            <NavLink to="/contact" activeStyle={{background: theme}} exact>
              &nbsp;
            </NavLink>
          </div>
        </div>
            
      </nav>
    </div>
  );
};
export default Navbar;
