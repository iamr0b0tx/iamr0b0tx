import React from 'react';
import Heading from '../components/Heading';
import { useEffect } from 'react';
import '../styles/About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Accordion from '../components/Accordion';

const About = ({ text }) => {
	useEffect(() => {
		Aos.init({ duration: 4000 });
	}, []);
	return (
		<div name='about' className='about'>
			
			<Heading text={'About Me'} />
			<div data-aos="fade-up"  className='landing-about'>
				<div className='left-about'>
					<p className='fatah'>
						Hi, my name is Abdulfatah Adeneye. A software developer based in
						Lagos, Nigeria.
						<br />I am very meticulous about my work, I like to understand the
						most fundamental details about any project that I could work on to
						deliver a successful result. I am very interested in technology
						trends and things cutting edge to stay on top like blockchain,
						quantum computing, and Artificial intelligence.
						<br />
						Presently I work in <span>Robots Limited</span> as the Head of
						Engineering. I am very meticulous about my work, I like to
						understand the most fundamental details about any project that I
						could work on to deliver a successful result.
					</p>
					<p className='skills'>
						Here are few technologies that I am familiar with{' '}
					</p>
					<Accordion />
				</div>

				<div className='right-about'>
					<div className='img-box'></div>
					<img
						className='image'
						src={require('../assets/adeneye-abdulfatah.jpg')}
						alt='handsome-fatah'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
