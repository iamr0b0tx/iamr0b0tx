import React, {useState}from 'react'
import { Link } from 'react-router-dom';
import { FaTimes} from "react-icons/fa"
import {AiOutlineMenu} from "react-icons/ai"
import "./Navbar.css";


const Navbar = () => {
    //for menu
    const [click, setClick]= useState(false);

    const [color, setColor] = useState(false);
    const handleColor = () => {
        if (window.scrollY >= 90){
            setColor(true);
        }
        else {
                setColor(false);
            }
        
    }
    window.addEventListener("scroll", handleColor)
const handleClick = () =>
setClick(!click);
    return (
        <div className={color ? "navbar navbar-bg" : "navbar"}>
            <Link to='/'>
        <h1 className="letter-f">F<span className="color-a">A.</span></h1>
            </Link>
<ul className={click ? "nav active" : "nav"}>
    <li>
        <Link to="/about" >About</Link>
    </li>
    <li>
        <Link to="/experience">Experience</Link>
        </li>
    <li>
        <Link to="/work">Work</Link>
    </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
</ul>
<div className='hamburger-menu' onClick={handleClick}>
{click ? (<FaTimes className='times'/>) : (<AiOutlineMenu className='menu' />)}
</div>
 </div>
    )
}

export default Navbar
