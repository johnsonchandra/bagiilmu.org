import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { CandidateItem } from './CandidateItem.js';

export const CandidateList = ({ candidates }) => (
  candidates.length > 0 ? <ListGroup className="documents-list">
    {candidates.map((candidateItem) => (
      <CandidateItem key={ candidateItem._id } candidateItem={ candidateItem } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No Candidate yet.</Alert>
);

CandidateList.propTypes = {
  candidates: React.PropTypes.array
};
