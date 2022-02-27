import { useState,useEffect } from "react";
import "./ImageGuitar.css"
import ImageTicket from "./ImageTicket";
import {CgArrowsExpandUpRight} from "react-icons/cg"
import { FiGithub } from "react-icons/fi";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";



const ImageTicketSlider = () => {
    const [current, setCurrent] = useState(0);
    const slideLength = ImageTicket.length;

    const nextSlide = () =>{
        setCurrent (current === slideLength - 1 ? 0 :current + 1)
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? slideLength - 1 : current - 1)
    }

    useEffect(() => {
      setCurrent(0);
      
    }, []);
    

 return (
 <div className="slider">
     <div className="slide-show" style={{backgroundImage:`url(${ImageTicket[current].image})`}}>
     </div>
     <div className="arrow">
     <div className="left-arrow" style={{fontSize:"2rem"}}>
     <BiLeftArrow onClick={prevSlide}/>
</div>
<div className="right-arrow" style={{fontSize:"2rem"}}>
<BiRightArrow onClick={nextSlide}/>
</div>
</div>

     <div className="slide-content">
         <h2>NOC-Monitor for Tracking Reports and Tickets</h2>
         
         <ul className="p-file">
             <li><FiGithub style={{fontSize:"2rem"}}/></li>
             <li><CgArrowsExpandUpRight style={{fontSize:"2rem"}}/></li>
         </ul>
         
     </div>
     
     
     </div>
 )
 } 
export default ImageTicketSlider
