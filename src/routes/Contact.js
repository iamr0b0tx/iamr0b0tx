import React,{useEffect} from 'react';
import '../styles/TertiaryButton.css';
import '../styles/Contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Heading from '../components/Heading';

const Contact = () => {
	useEffect(() => {
		Aos.init({ duration: 4000 });
	}, []);

	return (
		<div className='contact'>
			<div>
			<Heading text={'Get In Touch'} />
			<div data-aos="fade-up" className='contact-wrapper'>
				<form
					action='https://getform.io/f/1090c17c-5cbb-4893-aadd-597f20390e38'
					method='POST'
				>
					<input
						type='text'
						name='name'
						placeholder='Name'
						
						autoComplete='off'
					/>
					<label htmlFor='name'></label>

					<input
						type='email'
						name='email'
						autoComplete='off'
						placeholder='Email'
						required
					/>
					<label htmlFor='email' />
					<textarea
						type='text'
						name='message'
						cols='30'
						rows='7'
						autoComplete='off'
						placeholder='Leave a message...'
						required
					/>

					<div className='tertiary-button'>
						<button type='submit' className='tertiary'>
							submit
						</button>
					</div>
				</form>
			</div>
			
			</div>
		</div>
	);
};

export default Contact;
