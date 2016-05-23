import React from 'react';
import OrganizationDetail from '../../containers/organization/organization_detail.js';

export const Organization = ({ params, location }) => (
	<OrganizationDetail organizationId={ params.organizationId } />
);
