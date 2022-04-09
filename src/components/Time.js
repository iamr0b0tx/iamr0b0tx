import React from 'react';
import './Time.css';

const Time = ({ name }) => {
	return (
		<div>
			<h1 className='time'>{name}</h1>
		</div>
	);
};

export default Time;
