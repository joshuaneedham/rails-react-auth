import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import MainNav from './MainNav';

const Topbar = (props) => {
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
					Rails/React Auth App
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<MainNav />
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Topbar;
