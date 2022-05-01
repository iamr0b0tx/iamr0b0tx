import { useEffect } from 'react';
import './ImageGuitar.css';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';


const ImageYoutube = () => {
	
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);


	return (
		<div className='sliders'>
			
			<section className='slide-show'>
				
				<div className='slide-content'>
				<p>Youtube API Search</p>				
				<p> This searches youtube API for related videos. </p>
				<ul className='slide-skills'>
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript</li>
					<li>Python </li>
                    <li>Django</li>
</ul>

				<ul className='p-file'>
					<li>
						
						<a href="https://github.com/iamr0b0tx/guitar_audio_sample_recognizer">
						<FiGithub/></a>
					</li>
					<li>
						<a href="https://guitar-audio-sample-recognizer.herokuapp.com/" ><CgArrowsExpandUpRight /></a>
					</li>
				</ul>
			</div>

			</section>
			
		</div>
	);
};
export default ImageYoutube;
