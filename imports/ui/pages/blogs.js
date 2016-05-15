import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BlogList from '../containers/blog_list.js';
import { BlogMenu } from '../components/blog_menu.js';
// import { AddDocument } from '../components/add-document.js';

export const Blogs = ({ params, location }) => (
	<div>
		<Row>
			<Col xs={ 12 }>
				<BlogMenu />
			</Col>
		</Row>
		<Row>
			<Col xs={ 12 }>
				<h4 className="page-header">Blogs</h4>
				<BlogList />
			</Col>
		</Row>
	</div>
);
