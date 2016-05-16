import React from 'react';
import OrganizationList from '../containers/organization_list.js';

export const Organizations = ({ params, location }) => (
	<div>
		<h4 className="page-header">Organization List</h4>
		<OrganizationList />
	</div>
);
