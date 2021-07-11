import { createContext, useState } from 'react'

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {

    const [ theme, setTheme ] = useState("tomato")    

    const handleTheme = (e) => {
        console.log(e.target.value)
        
        if(e.target.value === 'color1') {
          setTheme('#837d82')
        } else if (e.target.value === 'color2') {
          setTheme('#81B214')
        } else if (e.target.value === 'color3') {
          setTheme('#D54062')
        } else if (e.target.value === 'color4') {
          setTheme('#8FCFD1')
        } else if (e.target.value === 'color4') {
          setTheme('#F7FD04')
        } else if (e.target.value === 'color5') {
          setTheme('#F7FD04')
        } else if (e.target.value === 'color6') {
          setTheme('#CC9B6D')
        } else if (e.target.value === 'color7') {
          setTheme('#9EDE73')
        } else if (e.target.value === 'color8') {
          setTheme('#342EAD')
        } else {
          setTheme('tomato')
        }
         
    }

    const data = { theme, handleTheme }

    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}

export { ThemeProvider };
export default ThemeContext