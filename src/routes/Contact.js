import React,{useState} from 'react';
import '../components/TertiaryButton.css';
import './Contact.css';
import Heading from '../components/Heading';
import { Navigate } from 'react-router-dom';

const Contact = () => {
const [goHome, SetGoHome]= useState(false);
if(goHome){
	return <Navigate to="/"/>
}

	return (
		<div className='contact' onLoad={()=>{
			SetGoHome(true)
		}}>
			{" "}
			<Heading text={'Get In Touch'} />
			<div className='contact-wrapper'>
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
	);
};

export default Contact;
