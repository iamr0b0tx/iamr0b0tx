import React from 'react'
import "./SecondaryButton.css"

const SecondaryButton = ({name}) => {
    return (
        <div>
          <button><a href='https://docs.google.com/document/d/15VVa6s9F93BHqvV32snvaTsLStccDNZpMsnEHUoAOeo/edit?usp=sharing'>{name}</a></button>
        </div>
    )
}

export default SecondaryButton
