import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
	//for menu
	const [click, setClick] = useState(false);
	const [color, setColor] = useState(false);

	const handleColor = () => {
		if (window.scrollY >= 90) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener('scroll', handleColor);
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	const handleClick = () => setClick(!click);
	return (
		<div
			data-aos='fade-in'
			className={color ? 'navbar navbar-bg' : 'navbar'}
			onClick={handleColor}
		>
			<div className='letter'>
				<Link to='home'>
					<h1 className='letter-fa'>A</h1>
				</Link>
			</div>
			<ul className={click ? 'nav active' : 'nav'}>
				<li>
					<Link smooth={true}  to='home' className='home_link'>
						Home
					</Link>
				</li>
				<li>
					<Link smooth={true}  to='about' className='about_link'>
						About
					</Link>
				</li>
				<li>
					<Link smooth={true}  to='experience'>Experience</Link>
				</li>
				<li>
					<Link smooth={true}  to='work'>Work</Link>
				</li>
				<li>
					<Link smooth={true} to='contact'>Contact</Link>
				</li>
			</ul>
			<div className='hamburger-menu' onClick={handleClick}>
				{click ? (
					<AiOutlineClose className='times' />
				) : (
					<AiOutlineMenu className='menu' />
				)}
			</div>
		</div>
	);
};

export default Navbar;
