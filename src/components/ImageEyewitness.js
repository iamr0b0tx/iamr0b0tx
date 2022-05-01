import { useEffect } from 'react';
import './ImageGuitar.css';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';


const ImageAudio = () => {
	
	

	return (
		<div  className='sliders'>
			
			<section className='slide-show'>
				
				<div className='slide-content'>
				<p>Eyewitness</p>				
				<p>A CRUD API for managing an audio files repository</p>
				<ul className='slide-skills'>
					<li>Python 3</li>
					<li>Flask</li>
					<li>PostgreSQL</li>
					<li>JSON</li>
                    <li>SQL</li>
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
export default ImageAudio;
