import '../styles/ImageGuitar.css';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';

import 'aos/dist/aos.css';

const ImageEyewitness = () => {
	return (
		<div className='sliders'>
			<section className='slide-shows'>
				<div className='slide-content'>
					<p>Eyewitness</p>
					<p>A CRUD API for managing an audio files repository</p>
					<ul className='slide-skills'>
						<li>Python </li>
						<li>Flask</li>
						<li>PostgreSQL</li>
						<li>JSON</li>
						<li>SQL</li>
					</ul>

					<ul className='p-file'>
						<li>
							<a href='https://github.com/iamr0b0tx/guitar_audio_sample_recognizer'>
								<FiGithub />
							</a>
						</li>
						<li>
							<a href='https://guitar-audio-sample-recognizer.herokuapp.com/'>
								<CgArrowsExpandUpRight />
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};
export default ImageEyewitness;
