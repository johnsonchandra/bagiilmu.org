import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const CommonNavigation = () => (
		<Nav>
	      <IndexLinkContainer to="/">
	        <NavItem eventKey={ 1 } href="/">Home</NavItem>
	      </IndexLinkContainer>

			<LinkContainer to="/candidate">
				<NavItem eventKey={ 2 } href="/candidate">Candidate List</NavItem>
			</LinkContainer>

			<LinkContainer to="/documents">
				<NavItem eventKey={ 3 } href="/documents">How You Can Help</NavItem>
			</LinkContainer>

			<LinkContainer to="/documents">
				<NavItem eventKey={ 4 } href="/documents">How We Work</NavItem>
			</LinkContainer>

			<LinkContainer to="/blogs">
				<NavItem eventKey={ 5 } href="/blogs">Blog</NavItem>
			</LinkContainer>

			<LinkContainer to="/documents">
				<NavItem eventKey={ 6 } href="/documents">About Us</NavItem>
			</LinkContainer>
		</Nav>
);
