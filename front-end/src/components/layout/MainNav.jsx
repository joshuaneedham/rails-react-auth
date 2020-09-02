import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const MainNav = (props) => {
	return (
		<div>
			<Nav className='mr-auto'>
				<Nav.Link as={Link} to='/'>
					Home
				</Nav.Link>
				{props.loggedInStatus !== 'LOGGED_IN' ? null : (
					<Nav.Link as={Link} to='/dashboard'>
						Dashboard
					</Nav.Link>
				)}
				<Nav.Link as={Link} to='/user'>
					User
				</Nav.Link>
			</Nav>
		</div>
	);
};

export default MainNav;
