import { useState } from "react";

import "../styles/navbar.css";
import "../styles/Home.css";
import "../styles/About.css";
import "../asserts/querys/querys.css";

import Routes from "./Routes";
import ConfigBtn from "./ConfigBtn";
import Navbar from "./Navbar";

import { ThemeProvider } from "../context/ThemeContext";
import { LenguageProvider } from "../context/LenguageContext";

const MyPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState("");
  const [showPalette, setShowPalette] = useState(false);

  const onScroll = (e) => {};

  const handleMenu = () => {
    setShowMenu(!showMenu);
    setHiddenMenu("menu-hidden");
  };

  const handlePalette = () => {
    setShowPalette(!showPalette);
  };

  return (
    <ThemeProvider>
      <LenguageProvider>
        <div className={`app `}>
          <Navbar
            handleMenu={handleMenu}
            showMenu={showMenu}
            hiddenMenu={hiddenMenu}
          />
          <ConfigBtn handlePalette={handlePalette} showPalette={showPalette} />
          <Routes onScroll={onScroll} />
        </div>
      </LenguageProvider>
    </ThemeProvider>
  );
};

export default MyPage;
