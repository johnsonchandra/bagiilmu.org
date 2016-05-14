import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import { toggleNav } from '../../modules/utils.js';

const handleLogout = () => {
  toggleNav();
  Meteor.logout(() => browserHistory.push('/login'));
};

const userName = () => {
  const user = Meteor.user();
  // const name = user && user.profile ? user.profile.name : '';
  // return user ? `${name.first} ${name.last}` : '';
  return user && user.profile ? user.profile.fullname : '';
};


const profileLink = () => {
  const user = Meteor.user();
  return user ? '/profile/'+user._id : '';
};

export const AuthenticatedNavigation = () => (
  <div  onClick={ toggleNav }>
    <Nav>

      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Home</NavItem>
      </IndexLinkContainer>

      <LinkContainer to="/documents">
        <NavItem eventKey={ 2 } href="/documents">Documents</NavItem>
      </LinkContainer>

    </Nav>
    <Nav pullRight>
      <LinkContainer to={ profileLink() }>
        <NavItem eventKey={ 4 } href={ profileLink() }>{ userName() }</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);
