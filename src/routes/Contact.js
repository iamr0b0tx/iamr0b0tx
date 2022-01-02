import React from 'react'
import "./Contact.css"
import Heading from '../components/Heading'
const Contact = ({text}) => {
    return (
        <div className='contact'>
             <Heading text={"Contact"}/>
             <div className='contact'>
             <form>
              <input type="text" placeholder='Name'/>
              <label htmlFor='name'/>
                <input type="email" placeholder='email'/>
                <label htmlFor="email"/>
                <textarea row="8"placeholder='I would like to...'></textarea>          
                </form>
             </div>
          
     </div> 
    )
}

export default Contact

