import { useEffect } from 'react';
import './ImageGuitar.css';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';


const ImageBackground = () => {
	
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);


	return (
		<div  className='sliders'>
			
			<section className='slide-shows'>
				
				<div className='slide-content'>
				<p>Background Removal API</p>				
				<p>This helps to remove the background of an uploaded image</p>
				<ul className='slide-skills'>
					<li>Python </li>
					<li>PyTorch</li>
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
export default ImageBackground;
