import { motion } from 'framer-motion'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const About = () => {

    const { theme } = useContext(ThemeContext)
 
    return (
        //
        <div className={theme}>

        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}  className='about-container'>
            About
        </motion.div>
    </div>
    )
}

export default About