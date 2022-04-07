import React from 'react'
import { useEffect } from "react"

import Heading from '../components/Heading';
import ImageGuitarSlider from '../components/ImageGuitarSlider';
import ImageGuitar from '../components/ImageGuitar';
import ImageRegSlider from '../components/ImageRegSlider';
import ImageTicketSlider from '../components/ImageTicketSlider';
import "./Work.css";
import ImageLogSlider from '../components/ImageLogSlider';
import ImageLog from '../components/ImageLog';
import ImageTicket from '../components/ImageTicket';
import ImageReg from '../components/ImageReg';
import Aos from "aos";
import "aos/dist/aos.css";



const Work = ({text, slides}) => {
    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    return (
        <div data-aos="fade-up" className='work'>

            <Heading text={"Projects"}/>  
            <div>
            <ImageGuitarSlider slides={ImageGuitar}/>
            <ImageTicketSlider slides={ImageTicket}/>
            <ImageRegSlider slides={ImageReg}/>
            <ImageLogSlider slides={ImageLog}/>
        </div>
        </div>
        
    )
}

export default Work

