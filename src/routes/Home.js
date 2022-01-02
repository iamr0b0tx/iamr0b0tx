import React from 'react'
import Footer from '../components/Footer'
import HeaderContent from '../components/HeaderContent'
import Experience from "./Experience"

import Navbar from '../components/Navbar'

import "./Home.css"
import About from './About'
import Contact from './Contact'
import Work from './Work'

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <HeaderContent/>
            <About/>
        <Experience/>
        <Work/>
        <Contact/>
            <Footer/>
            </div>

        
        
    )
}

export default Home
