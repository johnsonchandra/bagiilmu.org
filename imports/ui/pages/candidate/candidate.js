import React from 'react';
import CandidateDetail from '../../containers/candidate/candidate_detail.js';

export const Candidate = ({ params, location }) => (
	<CandidateDetail candidateId={ params.candidateId } />
);
