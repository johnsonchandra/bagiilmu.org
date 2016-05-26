import React from 'react';

import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const FaqPage = () => (
	<ListGroup>
		<ListGroupItem key='work' >
			<Link to="/faq/work">
				Cara Kami Bekerja / <i>How We Work</i>
			</Link>
	  </ListGroupItem>
		<ListGroupItem key='helo' >
			<Link to="/faq/help">
				Cara Kamu Membantu / <i>How You Can Help</i>
			</Link>
	  </ListGroupItem>
	</ListGroup>
);
