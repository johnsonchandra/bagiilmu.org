import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const CommonNavigation = () => (
		<Nav>
	      <IndexLinkContainer to="/">
	        <NavItem eventKey={ 1 } href="/">Home</NavItem>
	      </IndexLinkContainer>

			<LinkContainer to="/candidate">
				<NavItem eventKey={ 2 } href="/documents">Candidate List</NavItem>
			</LinkContainer>

			<LinkContainer to="/how/you/help">
				<NavItem eventKey={ 3 } href="/documents">How You Can Help</NavItem>
			</LinkContainer>

			<LinkContainer to="/how/we/work">
				<NavItem eventKey={ 4 } href="/documents">How We Work</NavItem>
			</LinkContainer>

			<LinkContainer to="/blog">
				<NavItem eventKey={ 5 } href="/documents">Blog</NavItem>
			</LinkContainer>

			<LinkContainer to="/about">
				<NavItem eventKey={ 6 } href="/documents">About Us</NavItem>
			</LinkContainer>
		</Nav>
);