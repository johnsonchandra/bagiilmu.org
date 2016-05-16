import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export const toggleNav = () => {
	if($('.navbar-toggle.collapsed').length == 0)
		$('.navbar-toggle').click();
};

export const handleLogout = () => Meteor.logout(() => browserHistory.push('/'));

export const resetInputValue = (component) => {
	ReactDOM.findDOMNode(component).blur()
	ReactDOM.findDOMNode(component).value= '';
};
