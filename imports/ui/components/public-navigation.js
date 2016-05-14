import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

import { toggleNav } from '../../modules/utils.js';

export const PublicNavigation = () => (
  <Nav pullRight onClick={ toggleNav } >
    <LinkContainer to="signup">
      <NavItem eventKey={ 1 } href="/signup">Sign Up</NavItem>
    </LinkContainer>
    <LinkContainer to="login">
      <NavItem eventKey={ 2 } href="/login">Log In</NavItem>
    </LinkContainer>
  </Nav>
);
