import logo from '../asserts/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

import NavMenu from './NavMenu'

const Navbar = ( { showMenu, handleMenu, hiddenMenu, handlePalette } ) => {
    
    return (
        <nav>
            <NavLink to='/' exact className='logo-container' >
               <img className='logo-img' src={logo} alt='logo'/>
               <h2 className='logo-text'>Slzar</h2>
            </NavLink>

            <div className='ham-container'><FontAwesomeIcon className='icon-menu' onClick={() => handleMenu()} icon={faBars}/></div>


            <div className='dots-container'>
                <NavLink to='/' activeClassName='active-dot' exact>&nbsp;</NavLink>           
                <NavLink to='/about' activeClassName='active-dot' exact>&nbsp;</NavLink>
                <NavLink to='/projects' activeClassName='active-dot' exact>&nbsp;</NavLink>
                <NavLink to='/contact' activeClassName='active-dot' exact>&nbsp;</NavLink>
            </div>
            
            <NavMenu className={hiddenMenu} handleMenu={handleMenu} showMenu={showMenu} hiddenMenu={hiddenMenu}/>
           
           
        </nav>
    )
}
export default Navbar