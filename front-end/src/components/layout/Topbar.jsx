import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import MainNav from './MainNav';
import Button from 'react-bootstrap/Button';

export default class Topbar extends Component {
	constructor(props) {
		super(props);

		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}
	handleLogoutClick() {
		axios
			.delete('http://localhost:3001/api/v1/logout', { withCredentials: true })
			.then((response) => {
				this.props.handleLogout();
			})
			.catch((error) => {
				console.log('logout error', error);
			});
	}

	render() {
		return (
			<div>
				<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
					<Navbar.Brand to='/' as={Link}>
						{/* <img
							alt=''
							src='/logo.svg'
							width='30'
							height='30'
							className='d-inline-block align-top'
						/>{' '} */}
						DownTheTu.be
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<MainNav loggedInStatus={this.props.loggedInStatus} />
						{this.props.loggedInStatus !== 'LOGGED_IN' ? null : (
							<Button
								type='Submit'
								onClick={(props) => this.handleLogoutClick()}>
								Logout
							</Button>
						)}
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}
