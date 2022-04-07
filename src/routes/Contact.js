import React from 'react'
import { useEffect } from "react"

import "./Contact.css"
import Heading from '../components/Heading'

import Aos from "aos";
import "aos/dist/aos.css";
import TertiaryButton from './TertiaryButton'

const Contact = ({text}) => {
    useEffect(() => {
        Aos.init({duration:2000})
    }, [])

    return (
        <div data-aos="fade-up" className='contact'>
               
             <Heading text={"Get In Touch"}/>
             <div className='contact-wrapper'>
             <form data-aos="fade-up" >
                 
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

