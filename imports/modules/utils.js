import { browserHistory } from 'react-router';

export const toggleNav = () => {
	if($('.navbar-toggle.collapsed').length == 0)
		$('.navbar-toggle').click();
};

export const handleLogout = () => Meteor.logout(() => browserHistory.push('/'));
