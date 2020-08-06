import React from 'react';

const Dashboard = (props) => {
	return (
		<div>
			{console.log(props.loggedInStatus)}
			<h1>Dashboard</h1>
			Session Info: {props.loggedInStatus}
		</div>
	);
};
export default Dashboard;
