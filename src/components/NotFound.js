import React from 'react';
import "./TertiaryButton.css"
import "../routes/Contact.css"
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return <div className="notFound">
        <h4 className='notHeading'>404 Page</h4>
    <p className='notParagraph'>The page you are looking doesn't exist</p>
    <div className='tertiary-button'>
    <button type='submit' className='tertiary'>
      <Link to="/">return to Home</Link></button>
     
     </div> </div>;
};

export default NotFound;
