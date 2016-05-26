import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BlogList from '../../containers/blog/BlogList.js';

export const BlogListPage = ({ params, location }) => (
	<Row>
		<Col xs={ 12 }>
			<h4 className="page-header">Blog List</h4>
			<BlogList />
		</Col>
	</Row>
);
