import { useEffect } from 'react';
import '../styles/ImageGuitar.css';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Image = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<div className='sliders'>
			<section className='slide-shows'>
				<div className='slide-content'>
					<p>Image Repository API</p>
					<p>A CRUD API for managing an image file repository</p>
					<ul className='slide-skills'>
						<li>Python 3</li>
						<li>DRF</li>
						<li>DjangoL</li>
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
export default Image;
