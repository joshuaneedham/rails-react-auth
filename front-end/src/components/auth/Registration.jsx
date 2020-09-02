import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Registration extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user_name: '',
			email: '',
			password: '',
			password_confirmation: '',
			registrationErrors: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(event) {
		const { user_name, email, password, password_confirmation } = this.state;
		axios
			.post(
				'http://localhost:3001/api/v1/registrations',
				{
					user: {
						user_name: user_name,
						email: email,
						password: password,
						password_confirmation: password_confirmation,
					},
				},
				{ withCredentials: true },
			)
			.then((response) => {
				if (response.data.status === 'created') {
					this.props.handleSuccessfulAuth(response.data);
				}
			})
			.catch((error) => {
				// Add popup alert for error handling in place of console.log
				console.log('registration error', error);
			});
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<h1>Registration</h1>
				<form onSubmit={this.handleSubmit}>
					<Form.Group controlId='formBasicUserName'>
						<Form.Label>Username</Form.Label>
						<Form.Control
							type='text'
							name='user_name'
							placeholder='Username'
							value={this.state.user_name}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							name='email'
							placeholder='Email'
							value={this.state.email}
							onChange={this.handleChange}
							required
						/>
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							name='password'
							placeholder='Password'
							value={this.state.password}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<Form.Group controlId='formPasswordConfirmation'>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type='password'
							name='password_confirmation'
							placeholder='Password Confirmation'
							value={this.state.password_confirmation}
							onChange={this.handleChange}
							required
						/>
					</Form.Group>
					<br />
					<Button type='submit'>Register</Button>
				</form>
			</div>
		);
	}
}
