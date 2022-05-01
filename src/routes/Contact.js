import React from 'react';
import emailjs from '@emailjs/browser';
import { useEffect,useRef, useCallback } from 'react';
import "../components/TertiaryButton.css"
import './Contact.css';
import Heading from '../components/Heading';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/Footer';

const Contact = ({ text }) => {
	const emailInput = useCallback((InputElement)=>{
		if(InputElement){
			InputElement.focus()
		}
	}, [])
	const form = useRef();
		const sendMail = (e) =>{
			e.preventDefault();
			
			emailjs.sendForm("service_5y08hn5","template_z0ktwir",
			 form.current,"3R6KcYZf_8MUXwVcf")
			 .then((result) => {
				console.log(result.text);
				console.log("message sent");

			}, (error) => {
				console.log(error.text);
			});
		};
	
	useEffect(() => {
		Aos.init({ duration: 4000 });
	}, []);

	return (
		<div data-aos='fade-up' className='contact'>
			<Heading text={'Get In Touch'} />
			<div className='contact-wrapper'>
			<form ref={form} onSubmit={sendMail}>
					<input type="text" name="user_name" 
						
		
					 placeholder='Name' autoComplete='off'/>
					<label htmlFor='name'></label>
					
					<input type='email' name="user_email" autoComplete='off'placeholder='Email' required />
					<label htmlFor='email' />
					<textarea type='text' name="message" cols="30" rows="7" autoComplete='off' placeholder='Leave a message...' required/>
				</form>
				<div className='tertiary-button'>
				<button name="submit" type='submit' className='tertiary'>submit</button>		
					</div>
			</div>
		</div>
	);
};

export default Contact;
