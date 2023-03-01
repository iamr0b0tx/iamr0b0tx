import React from 'react';

import '../styles/Heading.css';
const Heading = ({ text }) => {
	return (
		<div className='title'>
			<h1 className='heading'>{text}</h1>
		</div>
	);
};

export default Heading;
