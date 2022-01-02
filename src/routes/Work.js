import React from 'react'
import Heading from '../components/Heading'
import "./Work.css"

const Work = ({text}) => {
    return (
        <div className='work'>
            <Heading text={"Projects"}/>
        
        <div className='image-carousel'>
       <img src={require("../assets/regressioh-krigging-for-geodata.jpg")} alt="project-regression"/>
        <img src={require("../assets/detect-guiter--notes-using-ML.jpg")} alt='fatah'/>
        <img src={require("../assets/livestocklog-for-livestock-mgt.jpg")} alt='fatah'/>
        
        <img src={require("../assets/noc-monitor-for-tracking-tickets-and-reports.jpg")} alt='fatah'/>
</div></div>
    )
}

export default Work
