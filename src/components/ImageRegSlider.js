import { useState, useEffect } from 'react';
import './ImageGuitar.css';
import ImageReg from './ImageReg';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ImageRegSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const Length = slides.length;

	const nextSlide = () => {
		setCurrent(current === Length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? Length - 1 : current - 1);
	};

	useEffect(() => {
		setCurrent(0);
	}, []);
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	return (
		<div className='slider'>
			<section className='slide-show'>
				{ImageReg.map((slide, index) => {
					<FiGithub />;
					return (
						<div
							className={index === current ? 'slide active' : 'slide'}
							key={index}
						>
							{index === current && (
								<img src={slide.image} alt='work' className='project' />
							)}
						</div>
					);
				})}
				<div className='arrow'>
					<div className='left-arrow'>
						<BsFillArrowLeftSquareFill onClick={prevSlide} />
					</div>

					<div className='right-arrow'>
						<BsFillArrowRightSquareFill onClick={nextSlide} />
					</div>
				</div>
				<div className='slide-content-one'>
					<p>R-Kriging</p>
					<p>A web application that is capable of collecting location data. </p>
					<ul className='slide-skills'>
						<li>Python </li>
						<li>Django</li>
						<li>ML</li>
						<li>SQL</li>
					</ul>
					<ul className='p-file'>
						<li>
							<a href='http://regression-kriging.herokuapp.com'>
								<CgArrowsExpandUpRight />
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};
export default ImageRegSlider;
