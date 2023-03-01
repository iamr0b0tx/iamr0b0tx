import React from 'react';
import "../styles/TertiaryButton.css"
import "../styles/Contact.css"
import '../styles/NotFound.css'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleHome =()=>{
navigate("/")
  }
  return <div className="notFound">
    <div>
        <h4 className='notHeading'>404 Page</h4>
    <p className='notParagraph'>The page you are looking doesn't exist</p>
    </div>
    <div className='tertiary-button'>
    <button onClick={handleHome} type='submit' className='tertiary'>
      Return to Home page
      </button>
     
     </div>
      </div>;
};

export default NotFound;
