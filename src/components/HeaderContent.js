import React, { useEffect } from 'react';

import SecondaryButton from './SecondaryButton';
import './HeaderContent.css';

import PrimaryButton from './PrimaryButton';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';

const HeaderContent = () => {
	useEffect(() => {
		Aos.init({ duration: 4000 });
	}, []);
	return (
		<div data-aos='fade-up' className='landing'>
			<div className='left'>
				<h1 className='small'>Hi, my name is </h1>
				<h2 className='big'> Abdulfatah Adeneye.</h2>
				<h3 className='medium'>Software developer.</h3>

				<p className='para'>
					A Solution hacker that is enthusiastic about technology.
				</p>

				<div className='btn'>
					<SecondaryButton name={'Resume'} />
					<PrimaryButton name={'Contact'} />
				</div>
			</div>

			<div className='right'>
				<div className='blockquote-wrapper'>
					<div className='blockquote'>
						<h1>
							"I usually know what I am doing until I don't, And then...I do."
						</h1>

						<cite>Abdulfatah</cite>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderContent;
