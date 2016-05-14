import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

import { toggleNav } from '../../modules/utils.js';

import { CommonNavigation } from './common-navigation.js';

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
  <div onClick={ toggleNav }>
    <CommonNavigation />
    <Nav pullRight>
      <LinkContainer to={ profileLink() }>
        <NavItem eventKey={ 4 } href={ profileLink() }>{ userName() }</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);
