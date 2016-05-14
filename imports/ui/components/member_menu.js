import React from 'react';
import { browserHistory } from 'react-router';

import { Button } from 'react-bootstrap';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/'));

export const MemberMenu = ({ memberId }) => {
	if(Meteor.userId() === memberId)
		return(
			<Button bsStyle="danger" onClick={ handleLogout } >Logout</Button>
		);
	else
		return(
			<p>BEDAAAA</p>
		);
};
