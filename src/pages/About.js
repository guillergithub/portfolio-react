import { motion } from 'framer-motion'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const About = () => {

    const { theme } = useContext(ThemeContext)
 
    return (
        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}  className={`about-container ${theme}`}>
            <h3>About Me</h3>
            
            <div className="cards-container">
                <div className="card">
                    <h1>IMG</h1>
                    
                </div>
            </div>
            
        </motion.div>
        
    )
}

export default About