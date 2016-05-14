import React from 'react';
import { browserHistory } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';

const handleLogout = () => {
  Meteor.logout(() => browserHistory.push('/'));
};

export const Profile = () => (
	<div>

		<Jumbotron className="text-center">
		 <h2>Profile User</h2>
		 <p>Education for Everyone</p>
		 <p><a className="btn btn-success" href="/blog" role="button">Read the Blog</a></p>
		 <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at Alpha.20160514</p>
		</Jumbotron>
  
		<Button bsStyle="danger" onClick={ handleLogout }>Logout</Button>
	</div>
);
