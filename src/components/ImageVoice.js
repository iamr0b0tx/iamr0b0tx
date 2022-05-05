import './ImageGuitar.css';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';

import 'aos/dist/aos.css';


const ImageVoice = () => {
	
	

	return (
		<div  className='sliders'>
			
			<section className='slide-shows'>
				
				<div className='slide-content'>
				<p>Voice Recognition</p>				
				<p>A implementation of the Siamese Network for voice recognition </p>
				<ul className='slide-skills'>
					<li>Python </li>
					<li>ML</li>
					<li>Pandas</li>
					
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
export default ImageVoice;
