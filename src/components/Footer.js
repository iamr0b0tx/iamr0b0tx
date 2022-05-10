import React from 'react';
import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import {
	FiFacebook,
	FiTwitter,
	FiGithub,
	FiInstagram,
	FiLinkedin,
} from 'react-icons/fi';
import { ImReddit } from 'react-icons/im';
import './Footer.css';

const today = new Date();
const Footer = ({ text }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<div data-aos='fade-in' className='footer'>
			<p className='para-connect'>
				Would you like to stay connected, feel free to link up on social media.
			</p>

			<div className='footer-nav'>
				<ul className='social'>
					<li>
						<a href='https://www.reddit.com/uiser/amr0b0tx'>
							<ImReddit />
						</a>
					</li>
					<li>
						<a href='https://twitter.com/iamr0b0tx'>
							<FiTwitter />
						</a>
					</li>
					<li>
						<a href='https://web.facebook.com/abduladeneye'>
							<FiFacebook />
						</a>
					</li>
					<li>
						<a href='https://www.github.com/iamr0b0tx'>
							<FiGithub />
						</a>
					</li>
					<li>
						{' '}
						<a href='https://www.linkedin.com/in/abduladeneye/'>
							<FiLinkedin />
						</a>
					</li>
					<li>
						<a href='https://www.instagram.com/iamr0b0tx/'>
							<FiInstagram />
						</a>
					</li>
				</ul>
			</div>
			<div className='coder'>
				<p className='copy'>&copy; Abdulfatah Adeneye {today.getFullYear()}</p>
				<p className='copy one'> Designed and Coded by<a href="https://github.com/motuncoded"> Motunrayo Adeneye</a></p>
			</div>
		</div>
	);
};

export default Footer;
