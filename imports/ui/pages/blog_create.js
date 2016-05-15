import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BlogForm } from '../components/blog_form.js';

export const BlogCreate = ({ params, location }) => (
  <Row>
    <Col xs={ 12 }>
      <BlogForm />
    </Col>
  </Row>
);
