import React from 'react';
import Registration from '../auth/Registration';
import Login from '../auth/Login';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserAccount from './UserAccount';

export default class User extends React.Component {
	constructor(props) {
		super(props);

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
	}

	// Handles successful login and redirects user to Home page
	handleSuccessfulAuth(data) {
		this.props.handleLogin(data);
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				Session Info: {this.props.loggedInStatus}
				{/* Code below shuold be conditional and should display login and registration button. Upon selection onClick should populate the form selected. If user is logged in it should display the user information and the ability to edit. */}
				<Row>
					<Col>{console.log(this.props)}</Col>
				</Row>
				<Row>
					<Col md={6}>
						<Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
					</Col>
					<Col md={6}>
						<Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
					</Col>
				</Row>
			</div>
		);
	}
}
