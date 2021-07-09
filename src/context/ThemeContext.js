import { createContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [ theme, setTheme ] = useState("light")    

    const handleTheme = () => {
        console.log(theme)
        
        if(theme === 'light') {
          setTheme('dark')
        } else {
          setTheme('light')
        }
    }

    const data = { theme, handleTheme }

    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export { ThemeProvider };
export default ThemeContext