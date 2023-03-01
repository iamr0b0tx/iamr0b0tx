import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import HeaderContent from '../components/HeaderContent';
import '../styles/Home.css';
import Footer from '../components/Footer';
import About from "./About"
import Work from "./Work";
import Contact from "./Contact"
import Experience from "./Experience"

const Home = () => {

	useEffect(() => {
		Aos.init({ duration: 4000 });
	}, []);
	

	return (
		<div name='home' className='home'>
			<HeaderContent />
			<About/>
			<Experience/>
			<Work/>
			<Contact/>
			<Footer/>
		</div>
	);
};

export default Home;
