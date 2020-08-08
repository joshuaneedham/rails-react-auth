import React from 'react';

const Home = (props) => {
	return (
		<div>
			{console.log(props.loggedInStatus)}
			<h1>Home Page</h1>
			Session Info: {props.loggedInStatus}
			<p className='lead'>
				This was built watching Jordan Hudgens YouTube series on React + Rails
				API Authentication. Jordan's tutorials have help me greatly in my
				learning of Ruby, Rails, and now React.
			</p>
			<iframe
				width='560'
				height='315'
				src='https://www.youtube.com/embed/videoseries?list=PLgYiyoyNPrv_yNp5Pzsx0A3gQ8-tfg66j'
				frameborder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen></iframe>
			<p className='lead'>
				Feel free to use this application to help you get started building Rails
				backend with React front ends.{' '}
			</p>
		</div>
	);
};
export default Home;
