import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BlogsList from '../../containers/blog/blogs_list.js';

export const Blogs = ({ params, location }) => (
	<Row>
		<Col xs={ 12 }>
			<h4 className="page-header">Blogs</h4>
			<BlogsList />
		</Col>
	</Row>
);
