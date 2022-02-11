import React from 'react'
import "./ImageSlider.css"
import { useState } from 'react'
import ImageLog  from './ImageLog'
import  ImageGuitar from './ImageGuitar'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import ImageTicket from './ImageTicket'




const  ImageSlider = ({slides}) => {


     
     

    
    const [guitar, setGuitar] = useState(0)
    const [log,setLog] = useState(0);
    const [ticket, setTicket] = useState(0);

      

    
    
    const length = slides.length;
    const nextTicketSlide = () =>{
        setTicket(ticket === length - 1 ? 0 :ticket + 1 )
    }
    
    const prevTicketSlide = () => {
        setTicket(ticket === 0 ? length - 1: ticket - 1)
    }

    
    
    const nextLogSlide = () => {
        setLog(log ===  length -1 ? 0 :log + 1)
    }
    const prevLogSlide = () => {
        setLog(log === 0 ? length - 1: log - 1)
    }
    
    const nextGuitarSlide = () => {
        setGuitar(guitar ===  length -1 ? 0 :guitar + 1)
    }
    const prevGuitarSlide = () => {
        setGuitar(guitar === 0 ? length - 1: guitar - 1)
    }
    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    
    return (
        <div className='slide-container'>
        <div className='slide-show'>
            <div className='slide-show-slider'>
            
 {ImageLog.map((item, index) =>{
                  return(
 
                <div className={index === log ? "slide active" : "slide"} key={index}>
                   
             {index ===log && (
              <img key={index} src={item.image} alt="project" style={{width: "100%", height: "auto"}} />)} 
                
                  
        

                  
             
                
    
 </div>)
})} 
                

              
            <div className='slider'>
                
            <div className=" arrow left-arrow">           

            <BiLeftArrow onClick={prevLogSlide}/>
              </div>

            <div className='arrow right-arrow'><BiRightArrow  onClick={nextLogSlide} />
                       </div>
            
</div>

               
                {ImageLog.map((text, index) => {
                    return(
                    <h1 key={index}>{text.heading}</h1>
                    )
                })}
                {ImageLog.map((listItems, index) =>{
                    return(
            <div>
                <h3>{listItems.github}</h3>
                <h3>{listItems.arrow}</h3>
            </div> )  
         })}
                </div>
</div>
    
                <div className='slide-show'>
            <div className='slide-show-slider'>
            
                {ImageTicket.map((item, index) =>{

                return(
                
    <div className={index === ticket ? "slide active" : "slide"} key={index}>
{index ===ticket && (
    
<img key={index} src={item.image} alt="project"/>)}

</div>)

})}
<div className='slider'>
<div className="left-arrow">
            <BiLeftArrow onClick={prevTicketSlide}/>
            </div>
            <div className='right-arrow'><BiRightArrow  onClick={nextTicketSlide} />
                        </div>
</div>
{ImageTicket.map((text, index) => {
    return(
    <h1 key={index}>{text.heading}</h1>
    )
})}

{ImageTicket.map((listItems, index) =>{
    return(
<div>
<h3>{listItems.github}</h3>
<h3>{listItems.arrow}</h3>
</div>

    )
})}

</div>
</div>


        <div className='slide-show'>
            <div className='slide-show-slider'>
            
                {ImageGuitar.map((item, index) =>{

                return(
    <div className={index === guitar ? "slide active" : "slide"} key={index}>
{index ===guitar && (
<img key={index} src={item.image} alt="project"/>)}
</div>)

})}
<div className='slider'> 
<div className="left-arrow">
            <BiLeftArrow onClick={prevGuitarSlide}/>
            </div>
            <div className='right-arrow'><BiRightArrow  onClick={nextGuitarSlide} />
                        </div>
</div>
{ImageGuitar.map((text, index) => {
    return(
    <h1 key={index}>{text.heading}</h1>
    )
})}
{ImageGuitar.map((listItems, index) =>{
    return(
<div>
<h3>{listItems.github}</h3>
<h3>{listItems.arrow}</h3>
</div>

    )
})}

</div>
</div>



</div>

    )}
    export default ImageSlider