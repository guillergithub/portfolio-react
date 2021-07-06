import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


function ConfigBtn({ handlePalette, showPalette }) {
    return (
        <div className={showPalette ? 'config-container' : 'config-container hidden-config' }>
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
            </div>
            <div className='icon-container'>
                <FontAwesomeIcon className='icon-config' onClick={() => handlePalette()} icon={faCog}/>
            </div>

        </div>
    )
}

export default ConfigBtn
