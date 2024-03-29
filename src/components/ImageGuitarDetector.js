import { useEffect } from 'react';
import '../styles/ImageGuitar.css';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';


const ImageAudio = () => {
	
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);


	return (
		<div className='sliders'>
			
			<section className='slide-shows'>
				
				<div className='slide-content'>
				<p>Guitar Audio Sample Detection</p>				
				<p>A Jupyter Notebook that tell if an audio sample matches a predefined sample</p>
				<ul className='slide-skills'>
					<li>Python</li>
					<li>Keras</li>
					<li>Pandas</li>
					<li>ML</li>
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
