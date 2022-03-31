import React from 'react'
import Footer from '../components/Footer'
import HeaderContent from '../components/HeaderContent'
import Experience from "./Experience"

import Navbar from '../components/Navbar'
import NotFound from '../components/NotFound'
import "./Home.css"
import About from './About'
import Work from './Work'
import Contact from "./Contact"
import { Route, Routes } from 'react-router-dom'

const Home = () => {
    return (
        <div >
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
