import React from 'react';
import { useEffect} from 'react';
import "../components/TertiaryButton.css"
import './Contact.css';
import Heading from '../components/Heading';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
	
	
	
	useEffect(() => {
		Aos.init({ duration: 4000 });
	}, []);

	return (
		<div data-aos='fade-up' className='contact'>
			<Heading text={'Get In Touch'} />
			<div className='contact-wrapper'>
			<form action="https://getform.io/f/1090c17c-5cbb-4893-aadd-597f20390e38" method='POST'>
					<input type="text" name="name" 
						
		
					 placeholder='Name' autoComplete='off'/>
					<label htmlFor='name'></label>
					
					<input type='email' name="email" autoComplete='off'placeholder='Email' required />
					<label htmlFor='email' />
					<textarea type='text' name="message" cols="30" rows="7" autoComplete='off' placeholder='Leave a message...' required/>
				
					<div className='tertiary-button'>
				<button  type='submit' className='tertiary'>submit</button>		
					</div></form>
				
			</div>
		</div>
	);
};

export default Contact;
