import React from 'react'
import { useEffect } from "react"

import HeaderContent from '../components/HeaderContent'

import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css"




const Home = () => {

    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    return (
        <div data-aos="fade-up"className='home' >
    
            <HeaderContent/>
                    

        
            
            </div>

        
        
    )
}

export default Home
