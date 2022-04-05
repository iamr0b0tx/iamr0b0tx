import React from 'react'
import "./TertiaryButton.css"

const TertiaryButton = ({text}) => {
    return (
        <div>
            <button className='tertiary'>
            <a href='https://docs.google.com/document/d/15VVa6s9F93BHqvV32snvaTsLStccDNZpMsnEHUoAOeo/edit?usp=sharing'>{text}</a></button>
        </div>
    )
}

export default TertiaryButton
