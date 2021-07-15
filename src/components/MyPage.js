import { useState, useEffect } from "react";
import { useScrollDirection } from 'react-use-scroll-direction';
import { useHistory, useLocation } from "react-router-dom";


import "../styles/navbar.css";
import "../styles/ConfigBtn.css";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Projects.css";
import "../asserts/querys/querys.css";

import quiz from '../asserts/quiz.png'

import Routes from "./Routes";
import ConfigBtn from "./ConfigBtn";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";


import translations from '../translations.json';

import { ThemeProvider } from "../context/ThemeContext";
import { LenguageProvider } from "../context/LenguageContext";

const MyPage = () => {
  
  //SCROLL DIRECTION LIBRARY
  const { isScrollingDown } = useScrollDirection();

  
  const history = useHistory();
  let location = useLocation();

  const [ showMenu, setShowMenu ] = useState(false);
  const [ hiddenMenu, setHiddenMenu ] = useState("");
  const [ showPalette, setShowPalette ] = useState(false); 
  const [ currentPage, setCurrentPage ] = useState(location.pathname)
  const [ nextPage , setNextPage ] = useState('')

  const [ bg, setBg ] = useState('')
  // const [ changePage, setChangePage ] = useState(false)
  // const [ scrollDown, setScrollDown ] = useState(isScrollingDown)
  
  

  const handleMenu = () => {
    setShowMenu(!showMenu);
    setHiddenMenu("menu-hidden");
  };

  const handlePalette = () => {
    setShowPalette(!showPalette);
  };

  const handleBgProjects = (e) => {
    console.log(e.target.value)
    let div = e.target.value
    if(div === '1') {
      setBg('red')
    } else if(div === '2' ) {
      setBg(quiz)

    } else {
      setBg('yellow')
    }
  }


  useEffect(() => {
   
    if(isScrollingDown) {      
      const pages = ['/', '/about', '/projects', '/contact'];        
      console.log('next Page: ', pages[pages.indexOf(currentPage) + 1] )
      setCurrentPage(location.pathname)     
      setNextPage(pages[pages.indexOf(currentPage) + 1])
           
    }
    
  }, [isScrollingDown, currentPage, location] );



  useEffect(() => {        
    history.push(nextPage)     
   
  }, [history, nextPage])
  

 
  return (
    <ThemeProvider>
      <LenguageProvider>
        <div className={`App `} >             
          <Navbar handleMenu={handleMenu} showMenu={showMenu} hiddenMenu={hiddenMenu} />
          <NavMenu className={hiddenMenu} handleMenu={handleMenu} showMenu={showMenu} hiddenMenu={hiddenMenu} translations={translations} />
          <ConfigBtn handlePalette={handlePalette} showPalette={showPalette} />
          <Routes handleBgProjects={handleBgProjects} bg={bg}/>          
        </div>
      </LenguageProvider>
    </ThemeProvider>
  );
};

export default MyPage;
