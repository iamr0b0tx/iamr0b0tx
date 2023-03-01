import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../styles/Navbar.css';


const Navbar = () => {
	//for menu
	const [isOpen, setOpen] = useState(false);
	const [color, setColor] = useState(false);
	let menuRef = useRef();
	useEffect(()=>{
		let handler = (e) =>{
if(!menuRef.current.contains(e.target)){
	setOpen(false);
}
		}
		document.addEventListener("mousedown", handler)
return()=>{
	document.removeEventListener("mousedown", handler)
}
	})

	const location = useLocation(); 

	const handleColor = () => {
		if (window.scrollY >= 90) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener('scroll', handleColor);

	const toggle = () => setOpen(!isOpen)
	return (
		<div
			className={color ? 'navbar navbar-bg' : 'navbar'}
			onClick={handleColor}
		>
			<div className='letter'>
			
					<h1 className='letter-fa'>A</h1>
		
			</div>
			<ul  ref={menuRef} className={isOpen ? 'nav active' : 'nav'}>
				<li>
					<Link  className={location.pathname === "/" ? "activeClass" : "inactiveClass" } to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className={location.pathname === "/about" ? "activeClass" : "inactiveClass" } to="about">
						About
					</Link>
				</li>
				<li>
					<Link to='experience' className={location.pathname === "/experience" ? "activeClass" : "inactiveClass" } >Experience</Link>
				</li>
				<li>
					<Link to='work' className={location.pathname === "/work" ? "activeClass" : "inactiveClass" } >Work</Link>
				</li>
				<li>
					<Link to='contact' className={location.pathname === "/contact" ? "activeClass" : "inactiveClass" } >Contact</Link>
				</li>
			</ul>
			<div className='hamburger-menu'  onClick={toggle}>
				{!isOpen ? <AiOutlineMenu style={{display: isOpen ? "block" : "none"}}/> : null}
				{!isOpen ? (
					<AiOutlineMenu className='menu'/>
				) : (
					<AiOutlineClose className='times' />
				)}
			</div>
		</div>
	);
};

export default Navbar;
