import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			loginErrors: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event) {
		const { email, password } = this.state;
		axios
			.post(
				'http://localhost:3001/api/v1/sessions',
				{
					user: {
						email: email,
						password: password,
					},
				},
				{ withCredentials: true },
			)
			.then((response) => {
				if (response.data.logged_in === true) {
					this.props.handleSuccessfulAuth(response.data);
				}
			})
			.catch((error) => {
				// Add popup alert for error handling in place of console.log
				console.log('login error', error);
			});
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
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
					<br />
					<Button type='submit'>Login</Button>
				</form>
			</div>
		);
	}
}
