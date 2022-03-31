import React from 'react'
import Heading from '../components/Heading'

import Timeline from "../components/Timeline"
import "./Experience.css"


const Experience = ({text}) => {
    return (
        <div className='experience'>
           
           <Heading text={"Where I have worked"} />
           <Timeline/>
            </div>
           
        
    )
}

export default Experience
