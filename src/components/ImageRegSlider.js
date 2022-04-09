import { useState, useEffect } from 'react';
import './ImageGuitar.css';
import ImageReg from './ImageReg';
import { CgArrowsExpandUpRight } from 'react-icons/cg';
import { FiGithub } from 'react-icons/fi';
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from 'react-icons/bs';

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

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}
	return (
		<div className='slider'>
			<div className='slide-content'>
				<p>Regression Kriging</p>

				<ul className='p-file'>
					<li>
						<FiGithub />
					</li>
					<li>
						<a href='http://regression-kriging.herokuapp.com'>
							<CgArrowsExpandUpRight />
						</a>
					</li>
				</ul>
			</div>
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
			</section>
		</div>
	);
};
export default ImageRegSlider;
