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
import { AiOutlineReddit } from 'react-icons/ai';
import { Link } from 'react-scroll';
import './Footer.css';

const today = new Date();
const Footer = ({ text }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		
		<div data-aos='fade-in' className="footer">
					<h1 className='connect'>Let's connect</h1>
					<p className='para-connect'>
						Would you like to stay connected, feel free to link up on social
						media.
					</p>
		
				<div className='footer-nav'>
					<ul className='social'>
						<li>
							<a href='https://www.reddit.com/uiser/amr0b0tx'target="_blank">
								<AiOutlineReddit />
							</a>
						</li>
						<li>
							<a href='https://twitter.com/iamr0b0tx'target="_blank">
								<FiTwitter />
							</a>
						</li>
						<li>
							<a href='https://web.facebook.com/abduladeneye' target="_blank">
								<FiFacebook />
							</a>
						</li>
						<li>
							<a href='https://www.github.com/iamr0b0tx' target="_blank">
								<FiGithub />
							</a>
						</li>
						<li>
							{' '}
							<a href='https://www.linkedin.com/in/abduladeneye/' target="_blank">
								<FiLinkedin />
							</a>
						</li>
						<li>
							<a href='https://www.instagram.com/iamr0b0tx/' target="_blank">
								<FiInstagram />
							</a>
						</li>
					</ul>
					<ul className='nav-social'>
						<li>
							
							<Link smooth={true}  to='home'>Home</Link>
						</li>
						<li>
							<Link smooth={true}  to='about'>About
							</Link>
						</li>
						<li>
							<Link smooth={true} to='experience'>Experience</Link>
						</li>
						<li>
							<Link smooth={true}  to='work'>Work</Link>
						</li>
						<li>
							<Link smooth={true}  to='contact'>Contact</Link>
						</li>
					</ul>
				</div>
				<div className='coder'>
					<p className='copy'>
						&copy; Abdulfatah Adeneye {today.getFullYear()}
					</p>
					<p className='copy one'>
						{' '}
						Designed and coded by motuncoded <FiGithub />
					</p>
				</div>
			</div>
	
	);
};

export default Footer;
