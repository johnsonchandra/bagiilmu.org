import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { CandidateItem } from './candidate_item.js';

export const CandidatesList = ({ candidates }) => (
  candidates.length > 0 ? <ListGroup className="documents-list">
    {candidates.map((candidateItem) => (
      <CandidateItem key={ candidateItem._id } candidateItem={ candidateItem } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No Candidate yet.</Alert>
);

CandidatesList.propTypes = {
  candidates: React.PropTypes.array
};
