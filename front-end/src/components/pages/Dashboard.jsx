import React from 'react';

const Dashboard = (props) => {
	console.log(props.userName);
	return (
		<div>
			{console.log(props.loggedInStatus)}
			<h1>{props.userName}'s Dashboard</h1>
			Session Info: {props.loggedInStatus}
		</div>
	);
};
export default Dashboard;
