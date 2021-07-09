import { createContext, useState } from "react";

const LenguageContext = createContext();

const LenguageProvider = ({ children }) => {
    
        const [ lenguage, setLenguage ] = useState('es')

        
        const handleLenguage = () => {
            console.log(lenguage)
            
            if(lenguage === 'es') {
                setLenguage('en')
            } else {
                setLenguage('es')
            }
        }
        
        const data = { lenguage, handleLenguage }
        
        return (
            <LenguageContext.Provider value={data}>{children}</LenguageContext.Provider>
        )
}

export { LenguageProvider }
export default LenguageContext;