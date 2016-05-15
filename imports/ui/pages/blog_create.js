import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BlogFormCreate } from '../components/blog_form_create.js';

export const BlogCreate = ({ params, location }) => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Create new Blog</h4>
      <BlogFormCreate />
    </Col>
  </Row>
);
