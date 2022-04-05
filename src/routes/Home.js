import React from 'react'
import Footer from '../components/Footer'
import HeaderContent from '../components/HeaderContent'
import Experience from "./Experience"

import Navbar from '../components/Navbar'
import "./Home.css"
import About from './About'

import Contact from "./Contact"


const Home = () => {
    return (
        <div >
            <Navbar/>
            <HeaderContent/>
            <About/>
<Experience/>

<Contact/>
<Footer/>            

        
            
            </div>

        
        
    )
}

export default Home
