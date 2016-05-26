import React from 'react';
import { Link } from 'react-router';
import { Row, Col, ListGroupItem } from 'react-bootstrap';

export const CandidateItem = ({ candidateItem }) => (
  <ListGroupItem key={ candidateItem._id }>
    <Row>
      <Col xs={ 8 } sm={ 10 }>
        <Link to={ '/candidate/detail/'+candidateItem._id }>{ candidateItem.fullname }</Link>
      </Col>
    </Row>
  </ListGroupItem>
);

CandidateItem.propTypes = {
  candidateItem: React.PropTypes.object.isRequired,
};
