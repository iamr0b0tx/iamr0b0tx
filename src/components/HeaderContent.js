import React, { useEffect } from 'react';

import SecondaryButton from './SecondaryButton';
import './HeaderContent.css';

import PrimaryButton from './PrimaryButton';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HeaderContent = () => {
	useEffect(() => {
		Aos.init({ duration: 4000 });
	}, []);
	return (
		<div data-aos='fade-up' className='landing'>
			<div className='left'>
				<p className='small'>Hi, my name is </p>
				<h1 className='big'> Abdulfatah Adeneye.</h1>
				<p className='medium'>Software developer.</p>

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
						<p>
							<span>"</span>I usually know what I am doing until I don't, And then...I do.<span>"</span>
						</p>

						<cite>Abdulfatah</cite>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderContent;
