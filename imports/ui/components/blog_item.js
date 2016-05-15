import React from 'react';
import { Link } from 'react-router';
import { Row, Col, ListGroupItem } from 'react-bootstrap';

export const BlogItem = ({ blogItem }) => (
  <ListGroupItem key={ blogItem._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <Link to={ '/blog/'+blogItem._id }>{ blogItem.title }</Link>
        <br/>
        { blogItem.article }
      </Col>
    </Row>
  </ListGroupItem>
);

BlogItem.propTypes = {
  blogItem: React.PropTypes.object.isRequired,
};
