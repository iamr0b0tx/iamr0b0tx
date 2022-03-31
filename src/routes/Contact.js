import React from 'react'
import "./Contact.css"
import Heading from '../components/Heading'
import TertiaryButton from './TertiaryButton'

const Contact = ({text}) => {
    return (
        <div className='contact'>
             
             <Heading text={"Get In Touch"}/>
             <div className='contact-wrapper'>
             <form>
                 
              <input className=""  placeholder="Name"type="text"/>
              <label htmlFor='name'></label>
                <input type="email" placeholder='Email'/>
                <label htmlFor="email"/>
                <input type="text" placeholder='Leave a message...'/>         
                
                
                </form>
                <div className='tertiary-button'>
                    <TertiaryButton text={"Submit"} />
                    </div>

             </div>
          
     </div> 
    )
}

export default Contact

