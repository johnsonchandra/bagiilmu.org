import React from 'react';
import CandidateList from '../../containers/candidate/CandidateList.js';

export const CandidateListPage = ({ params, location }) => (
	<div>
		<h4 className="page-header">Candidate List</h4>
		<CandidateList />
	</div>
);
