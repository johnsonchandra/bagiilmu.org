import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BlogList from '../containers/blog_list.js';
// import { AddDocument } from '../components/add-document.js';

export const Blogs = ({ params, location }) => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Blogs</h4>
      <BlogList />
    </Col>
  </Row>
);
