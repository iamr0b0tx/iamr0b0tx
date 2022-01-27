import React from 'react'
import SecondaryButton from './SecondaryButton'
import "./HeaderContent.css"
import PrimaryButton from "./PrimaryButton"


const HeaderContent = () => {
    return ( 
        <div className='landing'>
            <div className='left'>
            <h1 className='small'>Hi, I am </h1>
            <h2 className='big'> <span>Abdulfatah</span> Adeneye</h2>
            <h3 className='medium'>Software developer.</h3>
            <p className='para'>A Solution hacker that is enthusiastic about technology.</p>
            <div className='btn'>
            <SecondaryButton name={"Resume"}/>
            <PrimaryButton name={"Contact Me"}/>
            </div>
      
            </div>
            
            <div className='right'> 
            <h1 className='quote-fatah'>
                I usually know what I am doing until I don't 
                and then... <br/>
                I do.
            </h1>
    
            </div>
    
        </div>
        
        
    )
}

export default HeaderContent
