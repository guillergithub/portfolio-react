import React from 'react'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import translations from '../translations.json'
import ThemeContext from '../context/ThemeContext'
import LenguageContext from '../context/LenguageContext'


function ConfigBtn({ handlePalette, showPalette }) {

    const { theme, handleTheme } = useContext(ThemeContext)
    const { lenguage } = useContext(LenguageContext)

    return (
        <div className={showPalette ? `config-container ${theme}` : `config-container hidden-config ${theme}` }>
            <div className='palette-container'>
                <p className="configText">{translations[lenguage].configColorSwitcher}</p>
              
                <div>
                    <button className='color color1' alt='grey' value="color1" onClick={handleTheme}> </button>
                    <button className='color color2' value="color2" onClick={handleTheme}> </button>
                    <button className='color color3' value="color3" onClick={handleTheme}> </button>
                    <button className='color color4' value="color4" onClick={handleTheme}> </button>
                    <button className='color color5' value="color5" onClick={handleTheme}> </button>
                    <button className='color color6' value="color6" onClick={handleTheme}> </button>
                    <button className='color color7' value="color7" onClick={handleTheme}> </button>
                    <button className='color color8' value="color8" onClick={handleTheme}> </button>
                </div>
                <div>
                    <button className='btn btn-primary' onClick={handleTheme}>{translations[lenguage].configPredetermined}</button>                
                </div>
            </div>
            <div className='icon-config-container'>
                <FontAwesomeIcon className='icon-config' onClick={handlePalette} icon={faCog}/>
            </div>

        </div>
    )
}

export default ConfigBtn
