import { useState } from 'react';


import './App.css';
import './styles/navbar.css';
import './styles/Home.css'
import './styles/About.css'
import './asserts/querys/querys.css'

import Routes from './components/Routes'
import ConfigBtn from './components/ConfigBtn';


import Navbar from './components/Navbar'



function App() {

  const [ showMenu, setShowMenu ] = useState(false)
  const [ hiddenMenu, setHiddenMenu ] = useState('')
  const [ showPalette, setShowPalette ] = useState(false)
  // const [ hiddenPalette, setHiddenPalette ] = useState('')
  

  const onScroll = (e) => {
    console.log(e)
  }

  const handleMenu = () => {
    setShowMenu(!showMenu)    
    setHiddenMenu('menu-hidden')    
  }

  const handlePalette = () => {
    setShowPalette(!showPalette)
    // setHiddenPalette('hiden-palette')
    console.log(showPalette)
  }

  return (
    <div className="App">
      <Navbar handleMenu={handleMenu} showMenu={showMenu} hiddenMenu={hiddenMenu} />   
      <ConfigBtn handlePalette={handlePalette} showPalette={showPalette}/>
      <Routes onScroll={onScroll}/>
    </div>
  );
}

export default App;
