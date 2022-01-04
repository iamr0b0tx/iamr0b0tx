import React from 'react'
import "./Contact.css"
import Heading from '../components/Heading'
import TertiaryButton from './TertiaryButton'
const Contact = ({text}) => {
    return (
        <div className='contact'>
             <Heading text={"Contact"}/>
             <div className='contact'>
             <form>
              <input className="" type="text" placeholder='Abdulfatah Adeneye'/>
              <label htmlFor='name'/>
                <input type="email" placeholder='yourname@gmail.com'/>
                <label htmlFor="email"/>
                <input type="text" placeholder='I would like to...'/>         
                </form>
                <div className='tertiary-button'>
                    <TertiaryButton text={"Submit"} />
                    </div>

             </div>
          
     </div> 
    )
}

export default Contact

