import { NavLink } from "react-router-dom";
import { useContext } from "react";

import logo from "../asserts/logo.png";

import translations from "../translations.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLanguage } from "@fortawesome/free-solid-svg-icons";

import NavMenu from "./NavMenu";
import LenguageContext from "../context/LenguageContext";

const Navbar = ({ showMenu, handleMenu, hiddenMenu, handlePalette }) => {
  const { lenguage, handleLenguage } = useContext(LenguageContext);
  

  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-fluid nav">
          <div className="d-flex align-items-center">
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

            <ul className="d-flex align-items-center link-pages-container">
              <li>
                <NavLink to="/" exact>{translations[lenguage].navLinkHome}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{translations[lenguage].navLinkAbout}</NavLink>
              </li>
              <li>
                <NavLink to="/projects">{translations[lenguage].navLinkProjects}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{translations[lenguage].navLinkContact}</NavLink>
              </li>              
            </ul>

            
          <div>
            <FontAwesomeIcon className="icon-lenguage" icon={faLanguage} onClick={handleLenguage}/>
          </div>
          </div>



          <div className="ham-container" onClick={handleMenu}>
            <FontAwesomeIcon className="icon-menu" icon={faBars} />
          </div>

          <div className="dots-container">
            <NavLink to="/" activeClassName="active-dot" exact>
              &nbsp;
            </NavLink>
            <NavLink to="/about" activeClassName="active-dot" exact>
              &nbsp;
            </NavLink>
            <NavLink to="/projects" activeClassName="active-dot" exact>
              &nbsp;
            </NavLink>
            <NavLink to="/contact" activeClassName="active-dot" exact>
              &nbsp;
            </NavLink>
          </div>
        </div>

        <NavMenu
          className={hiddenMenu}
          handleMenu={handleMenu}
          showMenu={showMenu}
          hiddenMenu={hiddenMenu}
          translations={translations}
        />
      </nav>
    </div>
  );
};
export default Navbar;
