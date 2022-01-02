import React from 'react'
import "./PrimaryButton.css"


const PrimaryButton = ({name}) => {
    return (
        <div>
         <button className='primary'>{name}</button>   
        </div>
    )
}

export default PrimaryButton
