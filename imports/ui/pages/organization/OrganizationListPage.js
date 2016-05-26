import React from 'react';
import OrganizationList from '../../containers/organization/OrganizationList.js';

export const OrganizationListPage = ({ params, location }) => (
	<div>
		<h4 className="page-header">Organization List</h4>
		<OrganizationList />
	</div>
);
