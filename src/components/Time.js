import React from 'react';
import '../styles/Time.css';

const Time = ({ name }) => {
	return (
		<div>
			<h1 className='time'>{name}</h1>
		</div>
	);
};

export default Time;
