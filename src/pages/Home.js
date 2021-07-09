import photo from '../asserts/me-playing.png'
import { motion } from 'framer-motion'
import { useContext } from 'react'

import translations from '../translations' 
import LenguageContext from '../context/LenguageContext'

const Home = ({ onScroll }) => {

    const { lenguage } = useContext(LenguageContext)
    console.log(translations[lenguage])

    return (
             
        <motion.div onScroll={onScroll(window.onscroll)} animate={{ y: 0 }}  initial={{y: '100%'}}
        transition={{ ease: "easeOut", duration: .5 }} className='home-container'>

            <div className='greetings-container'>
                <h3>{translations[lenguage].mainWelcome},</h3>
                <h3>{translations[lenguage].introducesMe}</h3><span>Guillermo Salazar</span>

            </div>

            <div className='profile-container'>
                <img src={photo} alt='me-playing-guitar' className='photo' />
               
            </div>

        </motion.div>
    )
}

export default Home