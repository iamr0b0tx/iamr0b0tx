import React from 'react'
import "./TertiaryButton.css"

const TertiaryButton = ({text}) => {
    return (
        <div>
            <button type='button' className='tertiary'>{text}</button>
        </div>
    )
}

export default TertiaryButton
