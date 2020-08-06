import React from 'react';

const Home = (props) => {
	return (
		<div>
			{console.log(props.loggedInStatus)}
			<h1>Home Page</h1>
			Session Info: {props.loggedInStatus}
		</div>
	);
};
export default Home;
