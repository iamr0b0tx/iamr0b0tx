import React from 'react';
import Heading from '../components/Heading';
import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Timeline from '../components/Timeline';
import './Experience.css';

const Experience = ({ text }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div data-aos='fade-up' className='experience'>
			<Heading text={'Where I have worked'} />
			<Timeline />
		</div>
	);
};

export default Experience;
