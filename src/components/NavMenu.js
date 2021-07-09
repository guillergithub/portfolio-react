import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import translations from '../translations.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import '../styles/navbar.css'
import LenguageContext from '../context/LenguageContext'

const NavMenu = ({ handleMenu, showMenu }) => {

    const { lenguage } = useContext(LenguageContext)

    return (

        <div className={(showMenu) ? 'menu' : `menu-hidden` }>     
                    <FontAwesomeIcon className='menu-close-btn' icon={faTimes} onClick={handleMenu}/>

                    <ul className={`menu-list `}>
                        <li><NavLink to='/' activeClassName='active' exact>{translations[lenguage].navLinkHome}</NavLink></li>                
                        <li><NavLink to='/about' activeClassName='active' exact>{translations[lenguage].navLinkAbout}</NavLink></li>
                        <li><NavLink to='/projects' activeClassName='active' exact>{translations[lenguage].navLinkProjects}</NavLink></li>
                        <li><NavLink to='/contact' activeClassName='active' exact>{translations[lenguage].navLinkContact}</NavLink></li>
                    </ul>
                    
                    <div className='menu-footer'>
                        <div className='icons-container'>
                            <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/guillermoesalazar/"><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
                            <a target='_blank' rel='noreferrer' href="https://www.twitter.com/guillertweet"><FontAwesomeIcon className='icon' icon={faTwitter}/></a>
                            <a target='_blank' rel='noreferrer' href="https://www.instagram.com/guillershoot/"><FontAwesomeIcon className='icon' icon={faInstagram}/></a>
                            <a target='_blank' rel='noreferrer' href="https://www."><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                            <a target='_blank' rel='noreferrer' href="https://www.github.com/guillergithub"><FontAwesomeIcon className='icon' icon={faYoutube}/></a>      
                        </div>
                        
                        <p>© Guillermo Salazar 2021. All Rights Reseverd.</p>
                    </div>
            </div>    
    )
}

export default NavMenu;