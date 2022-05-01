import React from 'react';

import Navbar from './Navbar';
import './NotFound.css'

const NotFound = () => {
  return <div className="notFound">
        <h4 className='notHeading'>404 Page</h4>
    <p className='notParagraph'>The page you are looking doesn't exist</p>
      </div>;
};

export default NotFound;
