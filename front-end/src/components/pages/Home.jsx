import React, { Component } from 'react';
import User from './User';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{console.log(this.props.loggedInStatus)}
				<h1>Home Page</h1>
				Session Info: {this.props.loggedInStatus}
			</div>
		);
	}
}
