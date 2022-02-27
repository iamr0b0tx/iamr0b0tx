import React from 'react';
import ImageGuitarSlider from './ImageGuitarSlider';
import ImageLogSlider from './ImageLogSlider';
import ImageRegSlider from './ImageRegSlider';
import "./ImageSlider.css"
import ImageTicketSlider from './ImageTicketSlider'



const ImageSlider = () => {
  return <div className='slide-container'>
      <ImageTicketSlider/>
      <ImageLogSlider/>
      <ImageRegSlider/>
      <ImageGuitarSlider/>
      </div>
}

export default ImageSlider;
