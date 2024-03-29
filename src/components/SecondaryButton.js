import React from 'react';
import '../styles/SecondaryButton.css';

const SecondaryButton = ({ name }) => {
	return (
		<div className='resume'>
			<button className='secondary'>
				<a href='https://docs.google.com/document/d/15VVa6s9F93BHqvV32snvaTsLStccDNZpMsnEHUoAOeo/edit?usp=sharing'>
					{name}
				</a>
			</button>
		</div>
	);
};

export default SecondaryButton;
