import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Registration extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user_name: '',
			email: '',
			password: '',
			password_confirmation: '',
			registrationErrors: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { user_name, email, password, password_confirmation } = this.state;
		const { dispatch } = this.props;
		if ((user_name, email, password, password_confirmation)) {
			dispatch(
				userActions.register(user_name, email, password, password_confirmation),
			);
		}
	}

	render() {
		const { registration } = this.props;
		const { user_name, email, password, password_confirmation } = this.state;
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

function mapStateToProps(state) {
	const { registration } = state.registration;
	return {
		registration,
	};
}

const connectedRegistration = connect(mapStateToProps)(Registration);

export { connectedRegistration as Registration };
