import React from 'react'
import "./Button.css"

const Button = ({text}) => {
    return (
        <div className='say-hello'>
            <button className='tertiary'>
            <a href="mailto:abdulfatahadeneye@gmail.com">{text}</a>
                 </button>
        </div>
    )
}

export default Button
