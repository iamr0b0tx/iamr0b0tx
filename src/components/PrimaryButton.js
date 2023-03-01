import React from 'react';

import '../styles/PrimaryButton.css';

const PrimaryButton = ({ name }) => {
	return (
		<div>
			<button className='primary'>
				<a href='mailto:abdulfatahadeneye@gmail.com'>{name}</a>
			</button>
		</div>
	);
};

export default PrimaryButton;
