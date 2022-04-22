import React from 'react';
import { useEffect } from 'react';

import './Contact.css';
import Heading from '../components/Heading';

import Aos from 'aos';
import 'aos/dist/aos.css';
import TertiaryButton from '../components/TertiaryButton';

const Contact = ({ text }) => {
		


	useEffect(() => {
		Aos.init({ duration: 4000 });
	}, []);

	return (
		<div data-aos='fade-up' className='contact'>
			<Heading text={'Get In Touch'} />
			<div className='contact-wrapper'>
				<form action="https://getform.io/f/1090c17c-5cbb-4893-aadd-597f20390e38" method="POST">
					<input name='name' placeholder='Name' type='text' />
					<label htmlFor='name'></label>
					<input type='email' name="email" placeholder='Email' />
					<label htmlFor='email' />
					<input type='text' name="message" placeholder='Leave a message...' />
				</form>
				<div className='tertiary-button'>
					<TertiaryButton text={'Submit'} />
				</div>
			</div>
			
		</div>
	);
};

export default Contact;
