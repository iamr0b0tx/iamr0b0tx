import React from 'react'
import Heading from '../components/Heading'

import "./About.css"

const About = ({text}) => {
    return (
        <div className='about'>
            <Heading text={"About"}/>
            <div className='landing-about'>
               <div className='left-about'>
        < h2 className='fatah'>Hi, my name is Abdulfatah. 
        <br/>I am very meticulous about my work, I like to understand the most fundamental details about any project that I could work on to deliver a successful result. I am very interested in technology trends and things cutting edge to stay on top like blockchain, quantum computing, and Artificial intelligence.

</h2>
    
            <h3 class="skills">Here are the technology  I am familiar with</h3>
            <hr/>
            <div className='skillset'>
               <h4> python
                </h4>
            </div>
        </div>
        
            <div className="right-about">
         <div className='img-box'>
         </div>
        <img className='image' src={require("../assets/adeneye-abdulfatah.jpg")} alt="handsome-fatah"/>
            
           </div> 
    </div>

</div>
                
    )
}

export default About
