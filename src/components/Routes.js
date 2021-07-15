import { Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects';
import Contact from '../pages/Contact'



const Routes = ({ handleBgProjects, bg }) => {

    

    return (        
        <AnimatePresence >
            <Switch>
                <Route path='/' exact >
                    <Home  />
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/projects'>
                    <Projects handleBgProjects={handleBgProjects} bg={bg}/>
                </Route>
                <Route path='/contact'>
                    <Contact/>
                </Route>
            </Switch>
        </AnimatePresence>   
    )
}

export default Routes;