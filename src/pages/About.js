import { motion } from 'framer-motion'

const About = () => {
 
    return (
        //
        <div >

        <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}  className='about-container'>
            About
        </motion.div>
    </div>
    )
}

export default About