import React,{useEffect} from 'react';

import Heading from '../components/Heading';
import ImageGuitarSlider from '../components/ImageGuitarSlider';
import ImageGuitar from '../components/ImageGuitar';
import ImageRegSlider from '../components/ImageRegSlider';
import './Work.css';
import ImageLogSlider from '../components/ImageLogSlider';
import ImageLog from '../components/ImageLog';
import ImageReg from '../components/ImageReg';
import ImageAudio from '../components/ImageAudio';
import ImageYoutube from '../components/ImageYoutube';
import Image from '../components/Image';
import ImageEyewitness from '../components/ImageEyewitness';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Work = ({ text, slides }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);


	
	return (
		<div name="work" className='work'>
			<Heading text={'Projects'} />

			<div data-aos="fade-up" className='featured-container'>
			<p className='project-heading'>Featured projects</p>
			<div className='featured-wrapper'>
				<div className='block-1'>
					<div className='box-1'><ImageGuitarSlider slides={ImageGuitar}/></div>
					<div className='box-2'><ImageLogSlider slides={ImageLog}/></div>
					<div className='box-3'><ImageRegSlider slides={ImageReg}/></div>
					</div>
				<div className='block-2'>
					<div className='box-4'><ImageAudio/></div>
					<div className='box-5'><ImageYoutube/></div>
					<div className='box-6'><ImageEyewitness/></div>
					</div>
				<div className='block-3'>
				<div className='box-7'><Image/></div>
					<div className='box-8'><Image/></div>
					<div className='box-9'><Image/></div>
				</div>

				
				</div>
				</div>
				</div>
			
		
		
	);
};

export default Work;
