import React from 'react';
import { Row, Col, ListGroupItem } from 'react-bootstrap';

export const Blog = ({ blog }) => (
  <ListGroupItem key={ blog._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <b>{ blog.title }</b>
        <br/>
        { blog.article }
      </Col>
    </Row>
  </ListGroupItem>
);
