import React from 'react'
import Heading from '../components/Heading'


import "./About.css"
import {AiFillRightCircle} from 'react-icons/ai';

const About = ({text}) => {
    return (
        <div className='about'>
            <Heading text={"About Me"}/>
            <div className='landing-about'>
               <div className='left-about'>
        <p className='fatah'>Hi, my name is Abdulfatah. 
        <br/>I am very meticulous about my work, I like to understand the most fundamental details about any project that I could work on to deliver a successful result. I am very interested in technology trends and things cutting edge to stay on top like blockchain, quantum computing, and Artificial intelligence.

</p>
    
            <p class="skills">Few technologies I am familiar with:</p>
            <hr/>
            <div className='skillset'>
               <p><AiFillRightCircle style={{color:"var(--bg-green-color)"}}/> Python</p>
               <p><AiFillRightCircle style={{color:"var(--bg-green-color)"}}/> Reactjs</p>
               <p><AiFillRightCircle style={{color:"var(--bg-green-color)"}}/> Java</p> 
               <p><AiFillRightCircle style={{color:"var(--bg-green-color)"}}/> C/C++</p> 
               <p><AiFillRightCircle style={{color:"var(--bg-green-color)"}}/> PHP</p>
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
