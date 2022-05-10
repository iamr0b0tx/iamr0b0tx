import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';

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

	const handleClick = () => setClick(!click);
	return (
		<div
			className={color ? 'navbar navbar-bg' : 'navbar'}
			onClick={handleColor}
		>
			<div className='letter'>
				<a href='/'>
					<h1 className='letter-fa'>A</h1>
				</a>
			</div>
			<ul className={click ? 'nav active' : 'nav'}>
				<li>
					<a href='/' className='home_link'>
						Home
					</a>
				</li>
				<li>
					<a href='/about' className='about_link'>
						About
					</a>
				</li>
				<li>
					<a href='/experience'>Experience</a>
				</li>
				<li>
					<a href='/work'>Work</a>
				</li>
				<li>
					<a href='/contact'>Contact</a>
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
