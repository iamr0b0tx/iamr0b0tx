import {useState,useEffect } from "react";
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

    },[])
    
  

 return(
     <div className="slider">  
       <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"900px",height:"500px"}}>
<div className="slide-show" style={{ backgroundImage:`url(${ImageGuitar[current].image})`,zIndex:"2", width:"900px", height:"500px" }}/>
<img src={require("../assets/adeneye-abdulfatah.jpg")} style={{zIndex:"1"}}/>
</div>
     <div className="arrow">
     <div className="left-arrow" >
      <BiLeftArrow onClick={prevSlide }/>
</div>
 
<div className="right-arrow" >
<BiRightArrow  onClick={nextSlide}/>

</div>

</div>

     <div className="slide-content">
         <h3>Guitar Audio Sample Recognizer</h3>
         
         <ul className="p-file">
             <li><FiGithub/></li>
             <li><CgArrowsExpandUpRight/></li>
         </ul>
         
     </div>
    
     
     </div>
 )
 } 
export default ImageGuitarSlider
