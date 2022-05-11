import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
				<Link to='/'>
					<h1 className='letter-fa'>A</h1>
				</Link>
			</div>
			<ul className={click ? 'nav active' : 'nav'}>
				<li>
					<Link to='/' className='home_link'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about' className='about_link'>
						About
					</Link>
				</li>
				<li>
					<Link to='/experience'>Experience</Link>
				</li>
				<li>
					<Link to='/work'>Work</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
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
