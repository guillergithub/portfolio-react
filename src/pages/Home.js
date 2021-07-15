import photo from '../asserts/me-playing.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

import translations from '../translations' 
import LenguageContext from '../context/LenguageContext'
import ThemeContext from '../context/ThemeContext'

const Home = ({ onScroll }) => {

    const { lenguage } = useContext(LenguageContext)
    const { theme } = useContext(ThemeContext)      

    return (
             
        <motion.div animate={{ y: 0 }} initial={{y: '100%'}} tranition={{ ease: "easeOut", duration: .5 }} className='home-container'>

            <div className='greetings-container'>
                <div className="greetings">
                    <h1 className='hello-world' style={{color: theme}}>{translations[lenguage].mainWelcome}</h1>
                    <h3 className='im'>{translations[lenguage].introducesMe}</h3>
                    
                    <div className='fullname-container'>
                        <h1 className='firstname' style={{color: theme}} >Guillermo </h1>
                        <h1 className='lastname'  style={{color: theme}} >Salazar</h1>
                    </div>

                    <p className='web-developer'>{translations[lenguage].introducesDeveloper}</p>
                </div>

                <div className='icon-home-container mt-5' style={{background: theme}}>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/guillermoesalazar/"><FontAwesomeIcon className='icon' icon={faLinkedin}/></a>
                    <a target='_blank' rel='noreferrer' href="https://www.github.com/guillergithub"><FontAwesomeIcon className='icon' icon={faGithub}/></a>
                    <a target='_blank' rel='noreferrer' href="https://www.instagram.com/guillershoot"><FontAwesomeIcon className='icon' icon={faInstagram}/></a>                                        
                </div>
            </div>

            <div className='profile-container'>
                <img src={photo} alt='me-playing-guitar' className='photo' />               
            </div>

        </motion.div>
    )
}

export default Home