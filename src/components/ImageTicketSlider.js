import { useState,useEffect } from "react";
import "./ImageGuitar.css"
import ImageTicket from "./ImageTicket";
import {CgArrowsExpandUpRight} from "react-icons/cg"
import { FiGithub, FiLoader } from "react-icons/fi";
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
     
     <div className="slide-show" style={{backgroundImage:`url(${ImageTicket[current].image})`, width:"100%", height:"500px"}}>

     </div>
     <div className="arrow">
     <div className="left-arrow" >
     <BiLeftArrow onClick={prevSlide}/>
</div>
<div className="right-arrow" >
<BiRightArrow onClick={nextSlide}/>
</div>
</div>

     <div className="slide-content">
         <h3>NOC-Monitor for Tracking Reports</h3>
         
         <ul className="p-file">
             <li><FiGithub /></li>
             <li><CgArrowsExpandUpRight /></li>
         </ul>
         
     </div>
     
     
     </div>
 )
 } 
export default ImageTicketSlider
