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
import ImageGuitarDetector from "../components/ImageGuitarDetector"
import Image from '../components/Image';
import ImageEyewitness from '../components/ImageEyewitness';

import Aos from 'aos';
import 'aos/dist/aos.css';
import ImageBackground from '../components/ImageBackground';
import ImageSentiment from '../components/ImageSentiment';
import ImageVoice from '../components/ImageVoice';


const Work = ({ text, slides }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);


	
	return (
		<div name="work" className='work'>
			<Heading text={'Projects'} />

			<div data-aos="fade-up" className='featured-container'>
			<div className='featured-wrapper'>
					<div className='block-1'>
						
						<div><ImageGuitarSlider slides={ImageGuitar}/></div>
					<div><ImageLogSlider slides={ImageLog}/></div>
					<div><ImageRegSlider slides={ImageReg}/></div>
					</div>
					<div className='block-2'>
					<div><ImageAudio/></div>
					<div><Image/></div>
					</div>
					<div className='block-2'>
					<div><ImageEyewitness/></div>
					<div><ImageGuitarDetector/></div>
					</div>
					<div className='block-2'>
					<div><ImageYoutube/></div>
					<div><ImageSentiment/></div>
					</div>
					<div className='block-2'>
					<div><ImageBackground/></div>
					<div><ImageVoice/></div>
					</div>
				




					
				

				</div>
				</div>
				</div>
				
			
		
		
	);
};

export default Work;
