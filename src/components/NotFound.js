import React from 'react';
import Navbar from './Navbar';
import './NotFound.css'

const NotFound = () => {
  return <div className="notFound">
    <Navbar/>
    <h1 className='notHeading'>404 Page</h1>
    <p className='notParagraph'>The page you are looking doesn't exist</p>
      </div>;
};

export default NotFound;
