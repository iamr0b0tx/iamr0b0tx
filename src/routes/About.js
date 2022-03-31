import React from 'react'
import Heading from '../components/Heading'


import "./About.css";

import Accordion from '../components/Accordion';

const About = ({text}) => {
    return (
        <div id='about'>
            
            <Heading text={"About Me"}/>
            <div className='landing-about'>
               <div className='left-about'>
        <p className='fatah'>Hi, my name is Abdulfatah. A software developer based in Lagos.
        <br/>I am very meticulous about my work, I like to understand the most fundamental details about any project that I could work on to deliver a successful result. I am very interested in technology trends and things cutting edge to stay on top like blockchain, quantum computing, and Artificial intelligence.
       <br/> I am very meticulous about my work, I like to understand the most fundamental details about any project that I could work on to deliver a successful result.

</p>
     <p className="skills">Few technologies I am familiar with </p>         
            <Accordion/>
            
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
