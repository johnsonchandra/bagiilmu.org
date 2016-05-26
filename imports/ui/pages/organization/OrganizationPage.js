import React from 'react';
import OrganizationDetail from '../../containers/organization/OrganizationDetail.js';

export const OrganizationPage = ({ params, location }) => (
	<OrganizationDetail organizationId={ params.organizationId } />
);
