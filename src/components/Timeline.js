import React from 'react';
import './Timeline.css';
import Dot from '../components/Dot';
import Time from '../components/Time';
import Profile from '../components/Profile';
const Timeline = () => {
	return (
		<div className='timeline'>
			<div className='experience-items'>
				<div className='experience-item'>
					<Dot />
					<Time name={'February, 2022 - Present'} />
					<div className='experience-content'>
						<Profile
							title={'TechGC'}
							place={'New York, United State'}
							article={'Senior Backend Engineer'}
							list={'Oversee, design, develop the new TechGC platform.'}
						/>
					</div>
				</div>
				<div className='experience-item'>
					<Dot />
					<Time name={'November, 2021 - Present'} />
					<div className='experience-content'>
						<Profile
							title={'Robots Limited'}
							place={'Lagos, Nigeria'}
							article={'Head of Engineering'}
							list={'Design and develop various projects.'}
						/>
					</div>
				</div>
				<div className='experience-item'>
					<Dot />
					<Time name={'July, 2021 - Present'} />
					<div className='experience-content'>
						<Profile
							title={'Syslotus'}
							place={'Lagos, Nigeria'}
							article={'Lead Software Developer'}
							list={
								'Developed a Livestock management application and integrated paid subscription to the platform. '
							}
						/>
					</div>
				</div>
				<div className='experience-item'>
					<Dot />
					<Time name={'June, 2021 - Present'} />
					<div className='experience-content'>
						<Profile
							title={'MobileXcetera'}
							place={'Lagos, Nigeria'}
							article={'Lead Backend Engineer'}
							list={
								'Oversee, design, develop with development team working on various projects.'
							}
						/>
					</div>
				</div>
				<div className='experience-item'>
					<Dot />
					<Time name={'June, 2021 - Present'} />
					<div className='experience-content'>
						<Profile
							title={'Liberty Assured'}
							place={'Lagos, Nigeria'}
							article={'Software Engineering Conslutant'}
							list={
								'Train and advise development team working on in-house products.'
							}
						/>
					</div>
				</div>
				<div className='experience-item'>
					<Dot />
					<Time name={'March, 2021 - Present'} />
					<div className='experience-content'>
						<Profile
							title={'Meeney'}
							place={'Toronto, Canada'}
							article={'Lead Backend Engineer'}
							list={
								'Project development with ReactJs, Django Rest Framework, Kubernetes, Docker and Git.'
							}
						/>
					</div>
				</div>
				<div className='experience-item'>
					<Dot />
					<Time name={'April, 2021 - May, 2021'} />
					<div className='experience-content'>
						<Profile
							title={'IoTa Impact'}
							place={'Bogota, D.C'}
							article={'Software Engineering Consultant'}
							list={
								' Oversee and advise the development team working on projects using Django and Worked with AWS lightsail and Heroku.'
							}
						/>
					</div>
				</div>
				<div className='experience-item'>
					<Dot />
					<Time name={'July, 2019 - June, 2021'} />
					<div className='experience-content'>
						<Profile
							title={'Semicolon'}
							place={'Lagos,Nigeria'}
							article={'Software, AI/ML, Python facilitator, and Engineer'}
							list={
								'Oversee teams working on projects using Django, ML/AI from start to finish and Train software engineers on Python programming.'
							}
						/>
					</div>
				</div>
				<div className='experience-item'>
					<Dot />
					<Time name={'June, 2018 - Present'} />
					<div className='experience-content'>
						<Profile
							title={'Contract'}
							place={'Lagos,Nigeria.'}
							article={'Software and AI/ML Engineer'}
							list={'Design, develop, deploy and debug python applications.'}
						/>
					</div>
				</div>
				<div className='experience-item'>
					<Dot />
					<Time name={'June, 2018 - November, 2018'} />
					<div className='experience-content'>
						<Profile
							title={'BATELitwin Global Services'}
							place={'Victoria Island,Lagos.'}
							article={'Mechaninical Engineering Intern'}
							list={
								'Worked with a photogrammetry software as a POC for re-evaluating as-built modelling approach'
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
