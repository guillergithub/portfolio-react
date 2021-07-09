import photo from '../asserts/me-playing.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

import translations from '../translations' 
import LenguageContext from '../context/LenguageContext'

const Home = ({ onScroll }) => {

    const { lenguage } = useContext(LenguageContext)
    

    return (
             
        <motion.div onScroll={onScroll(window.onscroll)} animate={{ y: 0 }} initial={{y: '100%'}} transition={{ ease: "easeOut", duration: .5 }} className='home-container'>

            <div className='greetings-container'>
                <h1 className='hello-world'>{translations[lenguage].mainWelcome}</h1>
                <h3 className='im'>{translations[lenguage].introducesMe}</h3>
                
                <div className='fullname-container'>
                    <h1 className='firstname'>Guillermo </h1>
                    <h1 className='lastname'>Salazar</h1>
                </div>

                <p className='web-developer'>{translations[lenguage].introducesDeveloper}</p>

                <div className='icon-home-container mt-5'>
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