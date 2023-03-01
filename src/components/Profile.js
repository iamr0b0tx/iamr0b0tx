import React from 'react';
import '../styles/Profile.css';

const Profile = ({ title, place, article, list }) => {
	return (
		<div className='profile'>
			<h1 className='title-head'>{title}</h1>
			<h2 className='place'>{place}</h2>
			<h3 className='article'>{article}</h3>
			<p>{list}</p>
		</div>
	);
};

export default Profile;
