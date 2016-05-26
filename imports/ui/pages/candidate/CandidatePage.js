import React from 'react';
import CandidateDetail from '../../containers/candidate/CandidateDetail.js';

export const CandidatePage = ({ params, location }) => (
	<CandidateDetail candidateId={ params.candidateId } />
);
