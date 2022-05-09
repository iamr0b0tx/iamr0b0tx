import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HeaderContent from '../components/HeaderContent';
import './Home.css';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Work from './Work';
import Footer from '../components/Footer';

const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 4000 });
	}, []);

	return (
		<div name='home' className='home'>
			<HeaderContent />
			<About />
			<Experience />
			<Work />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
