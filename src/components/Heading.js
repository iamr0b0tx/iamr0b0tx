import React from 'react';

import './Heading.css';
const Heading = ({ text }) => {
	return (
		<div className='title'>
			<h1 data-aos="fade-in" className='heading'>{text}</h1>
		</div>
	);
};

export default Heading;
