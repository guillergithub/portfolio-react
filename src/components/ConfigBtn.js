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
                <p>Color Switcher</p>
                <br/>
                <div>
                    <span className='color'> </span>
                    <span className='color'> </span>
                    <span className='color'> </span>
                    <span className='color'> </span>
                    <span className='color'> </span>
                    <span className='color'> </span>
                </div>
                <div>
                    <select onChange={handleTheme}>                        
                        <option value="light" id="light">{translations[lenguage].headerLight}</option>                        
                        <option value="dark" id="dark">{translations[lenguage].headerDark}</option>
                    </select>
                </div>
            </div>
            <div className='icon-container'>
                <FontAwesomeIcon className='icon-config' onClick={handlePalette} icon={faCog}/>
            </div>

        </div>
    )
}

export default ConfigBtn
