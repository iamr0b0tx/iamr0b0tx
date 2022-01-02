import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillPhone, AiFillRedditSquare, AiFillTwitterSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Home from '../routes/Home'
import "./Footer.css"

const Footer = () => {
    return (
        
        <div className='footer'>
    <section class="semicircle">
    <h1 className='connect'>Let's connect</h1>
    < div className='social'>
            <h2><a href='https://www.reddit.com/uiser/amr0b0tx'><AiFillRedditSquare/></a></h2>
           <h2><AiFillFacebook/></h2>
             <h2><AiFillTwitterSquare/></h2>
            <h2><a href="https://github.com/iamr0b0tx"><AiFillGithub/></a></h2>
           <h2> <a href="https://ww.linkedin.com/in/abduladeneye/"><AiFillLinkedin/></a></h2>
            <h2><a href='www.instragram.com'><AiFillInstagram/></a></h2>
            </div>
 
 <div className='email'>
     <h2 className='email-un'><AiFillMail className='un'/>abduladeneye@gmail.com</h2>
     <h2 className='email-do'><AiFillPhone className='do'/>+2348037428664</h2>
 </div>

    </section>
    <ul className='social'>
            <li><a href='https://www.reddit.com/uiser/amr0b0tx'><AiFillRedditSquare/></a></li>
             <li><a href="#"><AiFillTwitterSquare/></a></li>
            <li><a href="https://www.github.com"></a></li>
           <li> <a href="https://www.linkedin.com/in/abduladeneye/"><AiFillLinkedin/></a></li>
            <li><a href='#'><AiFillInstagram/></a></li>
            </ul>
    <ul className='nav-social'>
        <li>
            <Link to="/">Home</Link></li>
        <li>
            <Link to="/about">About</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/work">Work</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    
    
    
    </ul>
            </div>
        
            
    )
}

export default Footer
