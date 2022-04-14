import React, { useState } from 'react';

import './Accordion.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Skill from './Skill';

const Accordion = () => {
	const [clicked, setClicked] = useState(false);

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
	};
	return (
		<div className='accordion'>
			<div className='container'>
				{Skill.map((item, index) => {
					return (
						<div className='item'>
							<div className='wrap' onClick={() => toggle(index)}>
								<h2>{item.heading}</h2>
								<span className='span-div'>
									{clicked === index ? <IoIosArrowDown/> : <IoIosArrowUp/>}
								</span>
							</div>
							{clicked === index ? (
								<div className='dropdown'>
									<p>{item.skillset}</p>
									<p>{item.skillset1}</p>
									<p>{item.skillset2}</p>
									<p>{item.skillset3}</p>
									<p>{item.skillset4}</p>
								</div>
							) : null}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Accordion;
