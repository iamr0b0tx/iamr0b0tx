import { useState,useEffect } from "react";
import "./ImageGuitar.css"
import  ImageGuitar from "./ImageGuitar";
import {CgArrowsExpandUpRight} from "react-icons/cg"
import { FiGithub, FiLoader } from "react-icons/fi";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";


const ImageGuitarSlider = () => {
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(false)
    const slideLength = ImageGuitar.length;

    const nextSlide = () =>{
        setCurrent (current === slideLength - 1 ? 0 :current + 1)
    
    }
    const prevSlide = () =>{
        setCurrent(current === 0 ? slideLength - 1 : current - 1)
        
    }

    useEffect(() => {
      setCurrent(0);

    }, []);
    useEffect(()=>{
      setLoading(true);
    
      
    }, []);
    
  

 return (
 <div className="slider">
     {
         loading ? <FiLoader/> : <div className="slide-show" style={{ backgroundImage:`url(${ImageGuitar[current].image})`}}>
    </div>
    }
     <div className="arrow">
     <div className="left-arrow" style={{fontSize:"2rem"}}>
      <BiLeftArrow onClick={prevSlide}/>
</div>
<div className="right-arrow" style={{fontSize:"2rem"}}>
<BiRightArrow onClick={nextSlide}>
</BiRightArrow>
</div>
</div>

     <div className="slide-content">
         <h2>Guitar Audio Sample Recognizer</h2>
         
         <ul className="p-file">
             <li><FiGithub style={{fontSize:"2rem"}}/></li>
             <li><CgArrowsExpandUpRight style={{fontSize:"2rem"}}/></li>
         </ul>
         
     </div>
     
     
     </div>
 )
 } 
export default ImageGuitarSlider
