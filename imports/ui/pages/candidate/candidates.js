import React from 'react';
import CandidatesList from '../../containers/candidate/candidates_list.js';

export const Candidates = ({ params, location }) => (
	<div>
		<h4 className="page-header">Candidate List</h4>
		<CandidatesList />
	</div>
);
