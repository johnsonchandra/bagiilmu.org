import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export const CommonNavigation = () => (
		<Nav>
	      <IndexLinkContainer to="/">
	        <NavItem eventKey={ 1 } href="/">Home</NavItem>
	      </IndexLinkContainer>

			<LinkContainer to="/candidates">
				<NavItem eventKey={ 2 } href="/candidates">Candidate</NavItem>
			</LinkContainer>

			<LinkContainer to="/organizations">
				<NavItem eventKey={ 3 } href="/organizations">Organization</NavItem>
			</LinkContainer>

			<LinkContainer to="/faqs">
				<NavItem eventKey={ 4 } href="/faq">FAQ</NavItem>
			</LinkContainer>

			<LinkContainer to="/blogs">
				<NavItem eventKey={ 5 } href="/blogs">Blog</NavItem>
			</LinkContainer>

			<LinkContainer to="/members">
				<NavItem eventKey={ 6 } href="/members">Member</NavItem>
			</LinkContainer>

			<LinkContainer to="/about/us">
				<NavItem eventKey={ 7 } href="/about/us">About Us</NavItem>
			</LinkContainer>
		</Nav>
);
