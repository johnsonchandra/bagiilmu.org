import React from 'react';
import { Link } from 'react-router';
import { Row, Col, ListGroupItem } from 'react-bootstrap';

export const BlogItem = ({ blogItem }) => (
  <ListGroupItem key={ blogItem._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <Link to={ '/blog/detail/'+blogItem._id }>{ blogItem.title }</Link> by { blogItem.owner().nickname }
      </Col>
    </Row>
  </ListGroupItem>
);

BlogItem.propTypes = {
  blogItem: React.PropTypes.object.isRequired,
};
