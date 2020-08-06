import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Topbar from './layout/Topbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import User from './pages/User';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedInStatus: 'NOT_LOGGED_IN',
			user: {},
		};

		this.handleLogin = this.handleLogin.bind(this);
	}

	checkLoginStatus() {
		axios
			.get('http://localhost:3001/logged_in', {
				withCredentials: true,
			})
			.then((response) => {
				if (
					response.data.logged_in &&
					this.state.loggedInStatus === 'NOT_LOGGED_IN'
				) {
					this.setState({
						loggedInStatus: 'LOGGED_IN',
						user: response.data.user,
					});
				} else if (
					!response.data.logged_in &
					(this.state.loggedInStatus === 'LOGGED_IN')
				) {
					this.setState({
						loggedInStatus: 'NOT_LOGGED_IN',
						user: {},
					});
				}
			})
			.catch((error) => {
				console.log('check login error', error);
			});
	}

	componentDidMount() {
		this.checkLoginStatus();
	}

	handleLogin(data) {
		this.setState({
			loggedInStatus: 'LOGGED_IN',
			user: data.user,
		});
	}

	render() {
		return (
			<div>
				<Topbar />
				<Container>
					<Switch>
						<Route
							exact
							path={'/'}
							render={(props) => (
								<Home
									{...props}
									handleLogin={this.handleLogin}
									loggedInStatus={this.state.loggedInStatus}
								/>
							)}
						/>
						<Route
							exact
							path='/dashboard'
							render={(props) => (
								<Dashboard
									{...props}
									handleLogin={this.handleLogin}
									loggedInStatus={this.state.loggedInStatus}
								/>
							)}></Route>
						<Route
							exact
							path='/user'
							render={(props) => (
								<User
									{...props}
									handleLogin={this.handleLogin}
									loggedInStatus={this.state.loggedInStatus}
								/>
							)}></Route>
					</Switch>
				</Container>
			</div>
		);
	}
}
