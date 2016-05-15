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

			<LinkContainer to="/blog/detail/how_you_can_help">
				<NavItem eventKey={ 3 } href="/blog/detail/how_you_can_help">How You Can Help</NavItem>
			</LinkContainer>

			<LinkContainer to="/blog/detail/how_we_work">
				<NavItem eventKey={ 4 } href="/blog/detail/how_we_work">How We Work</NavItem>
			</LinkContainer>

			<LinkContainer to="/blogs">
				<NavItem eventKey={ 5 } href="/blogs">Blog</NavItem>
			</LinkContainer>

			<LinkContainer to="/documents">
				<NavItem eventKey={ 6 } href="/documents">About Us</NavItem>
			</LinkContainer>
		</Nav>
);
