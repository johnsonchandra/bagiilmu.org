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

const memberLink = () => {
  const user = Meteor.user();
  return user ? '/member/detail/'+user._id : '';
};

export const AuthenticatedNavigation = () => (
  <div onClick={ toggleNav }>
    <CommonNavigation />
    <Nav pullRight>
      <LinkContainer to={ memberLink() }>
        <NavItem eventKey={ 4 } href={ memberLink() }>{ userName() }</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);
