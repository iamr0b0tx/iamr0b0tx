import React from "react";
import "../components/OtherProject.css";
import {FiGithub} from "react-icons/fi"
import {CgArrowsExpandUpRight} from "react-icons/cg"


const OtherProject = () =>{
    return (
        <div className="featured-project">
<div className="slide-content">
    <p >Audio file</p>
    <p>A backend service that can tell if an audio sample matches a pre-uploaded sample in the database  </p>
				<ul className='slide-skills'>
					<li>Python 3</li>
					<li>Keras</li>
					<li>Machine Learning</li>
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
<div className="slide-content">
    <p>guitar_audio_sample_recognizer</p>
    <p>A backend service that can tell if an audio sample matches a pre-uploaded sample in the database  </p>
				<ul className='slide-skills'>
					<li>Python 3</li>
					<li>Keras</li>
					<li>Machine Learning</li>
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
				</ul></div>
<div className="slide-content">
    <p>guitar_audio_sample_recognizer</p>
    <p>A backend service that can tell if an audio sample matches a pre-uploaded sample in the database  </p>
				<ul className='slide-skills'>
					<li>Python 3</li>
					<li>Keras</li>
					<li>Machine Learning</li>
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

        </div>
    )

}
export default OtherProject